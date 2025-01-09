import express from "express";
import {
  contentGet,
  contentPost,
  share,
  signin,
  signup,
} from "../controllers/user";
import { auth } from "../middleware/auth";
const UserRouter = express.Router();

UserRouter.get("/", auth, (req, res) => {
  res.json({ message: "Just for testing" });
});

UserRouter.post("/signin", signin);

UserRouter.post("/signup", signup);

UserRouter.post("/content", auth, contentPost);

UserRouter.get("/content", auth, contentGet);

UserRouter.post("/share", auth, share);

export default UserRouter;
