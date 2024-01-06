import { useState } from "react";
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login(props) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const [errorLogin, setErrorLogin] = useState("");

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    axios
      .post("http://localhost:5000/api/user/authenticate", loginState)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          login(loginState);
          navigate("/dashboard");
        } else if (result.data === "No record exist") {
          setErrorLogin("Student ID does not exist");
        } else if (result.data === "Password Incorrect") {
          setErrorLogin("Password Incorrect");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            minLength={field.minLength}
            pattern={field.pattern}
          />
        ))}
      </div>
      {errorLogin && <div className="text-red-500">{errorLogin}</div>}
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
