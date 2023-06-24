import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import FormInput from "../Input/Input";
import CustomButton from "../Button/Button";
import app, { db } from "../../FireBase/firebase.utils";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    let initialCartValue = 0;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return addDoc(collection(db, "users"), {
          displayName: displayName,
          email: email,
          uid: user.uid,
          initialCartValue: initialCartValue
        });
      })
      .then(() => {
        console.log("User signed up:", email);
        alert("Account created successfully");
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/");
      })
      .catch((error) => {
        alert("Couldn't sign up");
        console.log("error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <span>Create an account with your email and password</span>

      <form>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton onClick={handleSubmit} disabled={isLoading}>
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
