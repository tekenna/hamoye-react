import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFormHook = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value === "") setErrors({ ...errors, [name]: "Required*" });
    else setErrors({ ...errors, [name]: "" });
  };
  const handleSubmit = () => {
    if (form.username === "") setErrors({ ...errors, username: "Required*" });
    if (form.password === "") setErrors({ ...errors, password: "Required*" });
    if (form.password !== "" && form.username !== "") {
      localStorage.setItem("username", form.username)
      navigate("/dashboard");
    }
  };
  return { form, errors, handleChange, handleSubmit };
};
