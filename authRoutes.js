import express from "express";
import {
    showLogin,
    showSignup,
    signup,
    loginUser
} from "../controllers/authController.js";

const router = express.Router();

// Login
router.get("/login", showLogin);
router.post("/login", loginUser);

// Signup
router.get("/", showSignup);
router.post("/signup", signup);

// router.get("/login", showSignup);
// router.post("/home", signup);

export default router;
