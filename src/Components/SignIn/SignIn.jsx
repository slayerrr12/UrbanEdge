import FormInput from "../Input/Input";
import CustomButton from "../Button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.scss";
import app from "../../FireBase/firebase.utils";

import React, { useState } from "react";

const auth = getAuth(app);
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("looged in");
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type={handleSubmit}> Sign in </CustomButton>
        
      </form>
    </div>
  );
};

export default SignIn;
