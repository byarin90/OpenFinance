import express, { Router,Request,Response } from "express";
import transactionsCtrl from "../controllers/transactionsController";
const router = express.Router() as Router;

    
router.get("/", transactionsCtrl.getTransactions);
  

export default router;
