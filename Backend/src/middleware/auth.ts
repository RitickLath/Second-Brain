import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from Authorization header
    const token: string = req.headers.authorization?.split(" ")[1] || ""; // Bearer <token>
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Authentication token is missing. Please log in again.",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRETKEY as string);

    // Attach the userId to the request object
    // @ts-ignore
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(403).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};
