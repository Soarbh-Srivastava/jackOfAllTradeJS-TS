import { useState } from "react";

export const MutipleValueForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        First Name:
        <input name="fName" value={formData.fName} onChange={onChangeHandler} />
      </label>
      <label>
        Last Name:
        <input name="lName" value={formData.lName} onChange={onChangeHandler} />
      </label>
      <label>
        Email
        <input name="email" value={formData.email} onChange={onChangeHandler} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
