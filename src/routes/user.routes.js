import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getUserProfile, updateUserProfile } from "../controllers/profile.controller.js";
const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/current-user").get(verifyJWT, getUserProfile)
router.route("/update-info").patch(verifyJWT, updateUserProfile)

export default router