import React, { useState } from "react";
import BgImage from "../img/bg.jpg";
import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // to get firebase authentication instance
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const firebaseDB = getFirestore(app);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  const login = async () => {
    // prettier-ignore
    const { user : {providerData, refreshToken} } = await signInWithPopup(firebaseAuth, provider);

    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen relative">
      <img src={BgImage} alt="" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-overlay flex items-center justify-center">
        <div
          onClick={() => {
            login();
          }}
          className="flex items-center justify-center gap-3 bg-loginBg px-4 py-2 rounded-full cursor-pointer hover:bg-loginBg_hover hover:shadow-lg duration-100 transition-all ease-in-out"
        >
          <FcGoogle />
          <p>Signin with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
