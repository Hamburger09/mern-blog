import api from "../api";

const signup = async (formData,  setErrorMessage, setLoading) => {
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
export { signup };
