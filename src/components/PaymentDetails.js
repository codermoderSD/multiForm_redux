import React from "react";
import "../css/PaymentDetails.css";
import { useState } from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setPaymentCard,
  setPaymentCvv,
  setPaymentDate,
} from "../redux/paymentDetails/paymentDetailsActions";
import Header from "./utils/Header";

const PaymentDetails = () => {
  const [creditCard, setCreditCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const submitPaymentForm = () => {
    dispatch(setPaymentCard(creditCard));
    dispatch(setPaymentDate(expiry));
    dispatch(setPaymentCvv(cvv));
    history.push("/final");
  };

  return (
    <div className="payDetails">
      <Header active={3} />
      <div className="pay__container">
        <h1>Payment Details</h1>
        <Input
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          type="text"
          placeholder="Credit Card"
        />
        <Input
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          type="date"
          placeholder="Expiry Date"
        />
        <Input
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          type="number"
          placeholder="CVV"
        />
        <Button onClick={submitPaymentForm}>Submit Payment Details</Button>
      </div>
    </div>
  );
};

export default PaymentDetails;
