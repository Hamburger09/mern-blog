import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase.js";
import API from "../api/index.js";
import {useDispatch} from 'react-redux'
import { signInSuccess } from "../redux/user/userSlice.js";
import {useNavigate} from 'react-router-dom'


const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogleAuth = await signInWithPopup(auth, provider);
      const res = await API.post('/auth/google', {
        name: resultsFromGoogleAuth.user.displayName,
        email: resultsFromGoogleAuth.user.email,
        photo: resultsFromGoogleAuth.user.photoURL,
      });
      if(res) {
        dispatch(signInSuccess(res.data));
        // window.location.href = '/';
        navigate('/');
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="flex justify-center"
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
