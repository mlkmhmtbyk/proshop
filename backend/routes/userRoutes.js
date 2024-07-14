import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserPorfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserPorfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUsersByID).put(updateUser);

export default router;
