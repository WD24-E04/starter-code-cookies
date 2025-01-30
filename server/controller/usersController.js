import createError from "http-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw createError(400, "Please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw createError(401, "Incorrect email or password");
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "10min",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
