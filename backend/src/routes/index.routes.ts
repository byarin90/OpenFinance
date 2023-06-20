import express, { Router } from "express";
const router = express.Router() as Router;


  router.get("/transactions", async (req, res) => {
    res.send("Express + TypeScript Server for plaid");
  })
 
  

export default router;
