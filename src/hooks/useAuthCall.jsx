import axios from "axios";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

const useAuthCall = () => {

  const dispatch = useDispatch();
  
  const login = async (userinfo) => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userinfo
      );
      dispatch(loginSuccess());
      return data;
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    login,
  };
};

export default useAuthCall;
