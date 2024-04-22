import api from "../api";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

const signup = async (formData,  setErrorMessage, setLoading) =>{
  try {
    setLoading(true);
    setErrorMessage(null);
    const data = await api.post("/auth/signup", formData);
  
    return data;
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setLoading(false);
  }
};
const signin = async (formData,dispatch) => {
  try {
    dispatch(signInStart())
    const {data} = await api.post("/auth/signin", formData);
    
    dispatch(signInSuccess(data))
    return data;
  } catch (error) {
    dispatch(signInFailure(error.message))
  } 
};


export { signup, signin };
