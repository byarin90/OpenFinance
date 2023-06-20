import express, { Router } from "express";
import authCtrl from "../controllers/authController";
const router = express.Router() as Router;

router.post("/create_link_token", authCtrl.create_link_token);
router.post("/set_access_token", authCtrl.set_access_token);
router.post("/logout", authCtrl.logout);

export default router;
