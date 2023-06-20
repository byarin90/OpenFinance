import { Request, Response } from "express";
import { TransactionsGetRequest } from "plaid";
import { client } from "../configuration/plaidConfiguration";

const transactionsCtrl = {
    getTransactions:async (req: Request, res: Response) => {
        const request: TransactionsGetRequest = {
          access_token: req.cookies.access_token,
          start_date: "2018-01-01",
          end_date: "2025-02-01",
          options: {
            include_personal_finance_category: true,
          },
        };
        try {
          const response = await client.transactionsGet(request);
          let transactions = response.data.transactions;
    
          res.json(transactions);
        } catch (error) {
          // handle error
           res.status(500).json({
            error
          });
        }
      }
};


export default transactionsCtrl;