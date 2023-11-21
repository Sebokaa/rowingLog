import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import "./SignInPage.css";
import city from "../Assets/city1.mp4";

function SignInPage() {
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup (auth, provider)
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      document.querySelector(".title").innerHTML = "<h1 className='error'>Invalid Credentials</h1>";
      console.log(e);
    }
  }

  const handleSignUp = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      const emailInput = document.querySelector(".emailInput");
      const passInput = document.querySelector(".passInput");
      if(emailInput.value === '' || passInput.value === ''){
        document.querySelector(".title").innerHTML = "<h1>Missing Info</h1>";
      } else if(passInput.value.length < 6){
        document.querySelector(".title").innerHTML = "<h1>Longer Password</h1>";
      } else if(passInput.value.search(/[A-Z]/) === -1){
        document.querySelector(".title").innerHTML = "<h1>Include At Least 1 Capital</h1>";
      } else {
        document.querySelector(".title").innerHTML = "<h1>User Already Exists</h1>";
      }
      if(emailInput.value.includes('@gmail.com') || emailInput.value.includes('@outlook.com') || emailInput.value.includes('@yahoo.com') || emailInput.value.includes('@microsoft.com') || emailInput.value.includes('@smcm.edu') || emailInput.value.includes('@icloud.com')){
        console.log("ኢሜይሉ ይሰራል")
      } else{
        document.querySelector(".title").innerHTML = "<h1>Invalid Email</h1>";
      }
    }
  }

  return (
    <div className="container">
      <div className="page">
        <div className="left">
          <video
            src={city}
            autoPlay
            loop
            muted
            playsinline
            className="video-bg"
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Rowing Log</h1>
          </div>
            <input className="emailInput" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="passInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <div className="submitBut">
            <button onClick={handleSignUp} className="login-button">
                <h6>Sign up</h6>
              </button>
              <button onClick={handleLogin} className="login-button">
                <h6>Login</h6>
              </button>
            </div>
            <div className="separator">
            <h5>Or</h5>
          </div>
          <div className="signInWithGoogle">
            <button onClick = {handleGoogle} className="google">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                enable-background="new 0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <h5>Sign in with Google</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
