import { ACCESS_TOKEN_URL, LINK_TOKEN_URL, LOGOUT_URL } from "../constant/constant";
import { postApi } from "./services";

const fetchLinkToken = async () => {
  try {
    const { data } = await postApi(LINK_TOKEN_URL);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


const fetchAccessToken = async (public_token: string) => {
  try {
    const { data } = await postApi(ACCESS_TOKEN_URL, { public_token });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const fetchLogout = async () => {
  try {
    const { data } = await postApi(LOGOUT_URL);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export { fetchLinkToken,fetchAccessToken,fetchLogout };
