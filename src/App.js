import React from "react";
import StudentList from "./components/StudentList";
import MentorList from "./components/MentorList";
import BookingForm from "./components/BookingForm";
import PaymentForm from "./components/PaymentForm";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Career Carve</h1>
        <StudentList />
        <MentorList />
        <BookingForm />
        <PaymentForm />
      </div>
    </div>
  );
};

export default App;
