import React, { useState } from "react";

const BookingForm = () => {
  const [studentName, setStudentName] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [dateTime, setDateTime] = useState("");

  const students = ["John Doe", "Jane Smith", "Samuel Green", "Emily Brown"];

  const mentors = [
    "Dr. Michael Thompson - Data Science",
    "Prof. Anna White - Web Development",
    "Mr. David Johnson - Machine Learning",
    "Ms. Linda Williams - Cybersecurity",
  ];

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingDetails = {
      studentName,
      mentorName,
      dateTime,
    };

    // You can now send the bookingDetails to the backend via API call
    console.log("Booking Details:", bookingDetails);

    // Reset form fields after booking
    setStudentName("");
    setMentorName("");
    setDateTime("");
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Book a Session</h2>
      <label htmlFor="studentName">Student Name</label>
      <select
        id="studentName"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      >
        <option value="" disabled>
          Select a student
        </option>
        {students.map((student, index) => (
          <option key={index} value={student}>
            {student}
          </option>
        ))}
      </select>

      <label htmlFor="mentorName">Mentor Name</label>
      <select
        id="mentorName"
        value={mentorName}
        onChange={(e) => setMentorName(e.target.value)}
        required
      >
        <option value="" disabled>
          Select a mentor
        </option>
        {mentors.map((mentor, index) => (
          <option key={index} value={mentor}>
            {mentor}
          </option>
        ))}
      </select>

      <label htmlFor="dateTime">Date and Time</label>
      <input
        type="datetime-local"
        id="dateTime"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
