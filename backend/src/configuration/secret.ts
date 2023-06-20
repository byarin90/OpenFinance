import { Products } from "plaid";
import { config } from "dotenv";

config();
const APP_PORT = process.env.APP_PORT || 9000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(
  ',',
);
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(
  ',',
);
export const SECRET ={
    APP_PORT,
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_ENV,
    PLAID_PRODUCTS,
    PLAID_COUNTRY_CODES
}