import { LinkTokenCreateRequest } from "plaid";
import { client } from "../configuration/plaidConfiguration";
import { SECRET } from "../configuration/secret";
import { Response,Request } from "express";

const authCtrl={
    create_link_token: async (_:Request, res:Response)=> {
        try {
            const configs = {
              user: {
                client_user_id: "user-id",
              },
              client_name: "Plaid Quickstart",
              products: SECRET.PLAID_PRODUCTS,
              country_codes: SECRET.PLAID_COUNTRY_CODES,
              language: "en",
            } as LinkTokenCreateRequest;
      
            const createTokenResponse = await client.linkTokenCreate(configs);
            res.json(createTokenResponse.data);
          } catch (error) {
     
            res.status(500).json({
              error,session:false
            });
          }
      },
        set_access_token: async (req:Request, res:Response)=> {
            const public_token = req.body.public_token;
            try{
                const tokenResponse = await client.itemPublicTokenExchange({
                  public_token: public_token,
                });
                const access_token = tokenResponse.data.access_token;
                res.cookie("access_token", access_token, { httpOnly: true,sameSite:'lax'});
                res.json({
                  error: null,
                  session:true
                });
            }catch(error){
              res.status(500).json({
                error
              });
            }
          },
            logout: async (req:Request,res:Response)=>{
                try{
                    res.clearCookie('access_token');
                    res.json({
                      error:null,
                      session:false,
                      message:'logout success'
                    });
                }catch(error){
                  res.status(500).json({
                    error
                  });
                }
               
              }
}

export default authCtrl;