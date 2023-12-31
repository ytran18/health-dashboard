import { useState } from "react";
import { signupFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  // const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Check if the input is inside the flex container
    if (["Height", "Weight", "BloodType"].includes(id)) {
      setSignupState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    } else {
      setSignupState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post("http://localhost:5000/api/user/store", signupState)
      .then((result) => {
        console.log(result);
        navigate("/");
      })

      .catch((err) => console.log(err));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
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
        <div className="flex justify-between ">
          <Input
            type="number"
            placeholder="Height"
            id="Height"
            handleChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Weight"
            id="Weight"
            handleChange={handleChange}
          />
          <select
            name=""
            id="BloodType"
            value={signupState.BloodType || ""}
            onChange={handleChange}
            className="h-[42px] rounded-md relative block border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            placeholder="Blood Type"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        </div>
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
