import express from "express";
import {registerController, loginController, testController,} from '../controllers/authController.js'

// router object
const router = express.Router()

// Routing
// Register || Method Post
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController)

// test routes
router.get("/test", testController)

export default router;
