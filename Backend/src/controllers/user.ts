import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Both username and password are required",
    });
    return; // Ensure function terminates
  }

  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
      return;
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRETKEY as string,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token },
    });
  } catch (error) {
    console.error("hi" + error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
      error: error,
    });
  }
};

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Both username and password are required",
    });
    return;
  }

  try {
    const isUserExist = await User.findOne({ username });
    if (isUserExist) {
      res.status(409).json({
        success: false,
        message: "User with this username already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

export const contentPost = (req: Request, res: Response) => {};

export const contentGet = (req: Request, res: Response) => {};

export const share = (req: Request, res: Response) => {};
