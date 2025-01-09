import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";


export const signin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Both username and password are required",
    });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is incorrect, return an error
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Generate a JWT token with the user's ID
    const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY, {
      expiresIn: "1h",
    });

    // Respond with the token
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token },
    });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Both username and password are required",
    });
  }

  try {
    // Check if the user already exists
    const isUserExist = await User.findOne({ username });
    if (isUserExist) {
      return res.status(409).json({
        success: false,
        message: "User with this username already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({ username, password: hashedPassword });

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

export const contentPost = (req: Request, res: Response) => {};

export const contentGet = (req: Request, res: Response) => {};

export const share = (req: Request, res: Response) => {};
