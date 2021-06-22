import React from "react";
import "../css/AddressDetails.css";
import { useState } from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";
import { useHistory } from "react-router";
import {
  setAddressBuilding,
  setAddressFlat,
  setAddressPincode,
} from "../redux/addressDetails/addressDetailsActions";
import { useDispatch } from "react-redux";
import Header from "./utils/Header";

const AddressDetails = () => {
  const [buildName, setBuildName] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [pinCode, setPincode] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const submitAddressForm = () => {
    dispatch(setAddressBuilding(buildName));
    dispatch(setAddressFlat(flatNo));
    dispatch(setAddressPincode(pinCode));
    history.push("/payment");
  };

  return (
    <div className="addressDetails">
      <Header active={2} />
      <div className="address__container">
        <h1>Address Details</h1>
        <Input
          value={buildName}
          onChange={(e) => setBuildName(e.target.value)}
          type="text"
          placeholder="Building Name, Area"
        />
        <Input
          value={flatNo}
          onChange={(e) => setFlatNo(e.target.value)}
          type="number"
          placeholder="Flat Number"
        />
        <Input
          value={pinCode}
          onChange={(e) => setPincode(e.target.value)}
          type="number"
          placeholder="Pincode"
        />
        <Button onClick={submitAddressForm}>Submit Address Details</Button>
      </div>
    </div>
  );
};

export default AddressDetails;
