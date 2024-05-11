import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";

const signup = async (req, res, next) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 12);
  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return next(errorHandler(400, "Username already in use"));
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return next(errorHandler(400, "Email already in use"));
    }
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Creation of the user was successful." });
  } catch (error) {
    next(error.message);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const existingEmail = await User.findOne({ email });
    if (!existingEmail) {
      return next(errorHandler(404, "Email not found"));
    }

    const validPassword = bcryptjs.compareSync(
      password,
      existingEmail.password
    );

    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      {
        id: existingEmail._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    const {password: pass, ...rest} = existingEmail._doc

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export { signin, signup };
