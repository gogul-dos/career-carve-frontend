import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://career-carve-backend-1.onrender.com/payment", {
        studentId,
        amount,
      })
      .then((response) => {
        alert("Payment processed successfully!");
      })
      .catch((error) => console.error("Error processing payment:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Process Payment</h2>
      <div>
        <label>Student ID:</label>
        <input
          type="number"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
