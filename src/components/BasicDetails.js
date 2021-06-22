import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../css/BasicDetails.css";
import Button from "./utils/Button";
import Input from "./utils/Input";
import {
  setFullName,
  setBasicEmail,
  setBasicPhnNumber,
} from "../redux/basicDetails/basicDetailsActions";
import { useDispatch } from "react-redux";
import Header from "./utils/Header";

const BasicDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnNum, setPhnNum] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const submitBasicForm = () => {
    dispatch(setFullName(name));
    dispatch(setBasicEmail(email));
    dispatch(setBasicPhnNumber(phnNum));
    history.push("/address");
  };

  return (
    <div className="basicDetails">
      <Header active={1} />
      <div className="basic__container">
        <h1>Basic Details</h1>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Input
          value={phnNum}
          onChange={(e) => setPhnNum(e.target.value)}
          type="number"
          placeholder="Contact"
        />
        <Button onClick={submitBasicForm}>Submit Basic Details</Button>
      </div>
    </div>
  );
};

export default BasicDetails;
