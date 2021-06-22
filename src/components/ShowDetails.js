import React from "react";
import { useSelector } from "react-redux";
import "../css/ShowDetails.css";

const ShowDetails = () => {
  //Basic Details
  const name = useSelector((state) => state.Basic.fullName);
  const email = useSelector((state) => state.Basic.email);
  const phnNumber = useSelector((state) => state.Basic.phnNumber);

  //Address Details
  const building = useSelector((state) => state.Address.building);
  const flat = useSelector((state) => state.Address.flat);
  const pincode = useSelector((state) => state.Address.pincode);

  //Payment Details
  const creditCard = useSelector((state) => state.Payment.creditCard);
  const date = useSelector((state) => state.Payment.date);
  const cvv = useSelector((state) => state.Payment.cvv);

  return (
    <div className="showDetails">
      <div className="details__box">
        <div className="show__basic">
          <h1>Basic Details</h1>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {phnNumber}</p>
        </div>
        <div className="show__basic">
          <h1>Address Details</h1>
          <p>Building Name: {building}</p>
          <p>Flat Number: {flat}</p>
          <p>Pincode: {pincode}</p>
        </div>
        <div className="show__basic">
          <h1>Payment Details</h1>
          <p>Credit Card: {creditCard}</p>
          <p>Expiry Date: {date}</p>
          <p>CVV: {cvv}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
