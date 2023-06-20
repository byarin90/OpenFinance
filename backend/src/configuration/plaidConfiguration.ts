import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import { SECRET } from "./secret";

const configuration = new Configuration({
    basePath: PlaidEnvironments[SECRET.PLAID_ENV],
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": SECRET.PLAID_CLIENT_ID,
        "PLAID-SECRET": SECRET.PLAID_SECRET,
        "Plaid-Version": "2020-09-14",
      },
    },
  });
  
  export const client = new PlaidApi(configuration);