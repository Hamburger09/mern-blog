import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
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
  )
    next(errorHandler(400, "All fields are required"))

    const hashedPassword = bcryptjs.hashSync(password, 12);
    try {
    

        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });

    res.status(201).json({ message: "Creation of the user was successful." });
  } catch (error) {
    next(error)
  }
};

export { signup };
