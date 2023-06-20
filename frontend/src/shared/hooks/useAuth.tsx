import { fetchLogout } from "../services/serviceAuth";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../redux/features/plaidSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const { session, link_token } = useSelector(
    (state: RootState) => state.plaidReducer
  );
  const nav = useNavigate();
  const logout = async () => {
    try {
      localStorage.clear();
      await fetchLogout();
      nav("/");
      dispatch(setSession(null));
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuth = async () => {
    try {
      if(!localStorage['session']){
        await fetchLogout();
        nav("/");
        dispatch(setSession(null));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { logout, session, link_token,checkAuth };
};

export default useAuth;
