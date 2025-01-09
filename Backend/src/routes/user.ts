import express from "express";
import {
  contentGet,
  contentPost,
  share,
  signin,
  signup,
} from "../controllers/user";
const UserRouter = express.Router();

UserRouter.post("/signin", signin);

UserRouter.post("/signup", signup);

UserRouter.post("/content", contentPost);

UserRouter.get("/content", contentGet);

UserRouter.post("/share", share);

export default UserRouter;
