import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // or wherever you've defined it
import { getLinkToken, setSession } from "../redux/features/plaidSlice";
import React, { useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { fetchAccessToken } from "../services/serviceAuth";

const usePlaid = () => {
  const dispatch = useDispatch();
  const { link_token, loading } = useSelector(
    (state: RootState) => state.plaidReducer
  );

  const generateLinkToken = async () => {
    dispatch(getLinkToken());
  };

  const onSuccess = React.useCallback((public_token: string) => {
    const exchangePublicTokenForAccessToken = async () => {
        try{
            const response =await fetchAccessToken(public_token)
            console.log(response)
            if(response.session){
                console.log(response.session)
               dispatch(setSession(response.session))
            }
        }catch(error){
          console.log(error)
        }
    
    };
    
    exchangePublicTokenForAccessToken();
    window.history.pushState("", "", "/");
  }, []);

  let isOauth = false;

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: link_token,
    onSuccess,
  };

  if (window.location.href.includes("?oauth_state_id=")) {
    // TODO: figure out how to delete this ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (isOauth && ready) {
      open();
    }
  }, [ready, open, isOauth]);

  const openModelButton = (
    <button
      className="border p-3"
      type="button"
      onClick={() => open()}
      disabled={!ready}
    >
      Launch Link
    </button>
  );

  console.log(ready)
  return { link_token, loading, generateLinkToken,openModelButton,modal:{ready,open} };
};
export default usePlaid;
