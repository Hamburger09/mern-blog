import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  )
    return res.status(400).json({ erroMessage: "All fields are required." });

    const hashedPassword = bcryptjs.hashSync(password, 12);
    try {
        const existingUser = await User.findOne({  email });
        if(existingUser) return res.status(400).json({
            errorMessage: "user already exists"
        })

        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });

    res.status(201).json({ message: "Creation of the user was successful." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export { signup };
