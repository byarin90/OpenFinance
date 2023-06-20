//?All Url from backend server API ROUTES


//?BASE URL
const API_URL = 'http://localhost:9000/' as string;

//?AUTH URL
export const TRANSACTION_URL = API_URL + 'transactions' as string;
export const LINK_TOKEN_URL = API_URL + 'auth/create_link_token' as string;
export const ACCESS_TOKEN_URL = API_URL + 'auth/set_access_token' as string;
export const LOGOUT_URL = API_URL + 'auth/logout' as string;