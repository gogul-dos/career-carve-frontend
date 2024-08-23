import React from "react";

const MentorList = () => {
  const mentors = [
    { id: 1, name: "Dr. Michael Thompson", specialization: "Data Science" },
    { id: 2, name: "Prof. Anna White", specialization: "Web Development" },
    { id: 3, name: "Mr. David Johnson", specialization: "Machine Learning" },
    { id: 4, name: "Ms. Linda Williams", specialization: "Cybersecurity" },
  ];

  return (
    <div>
      <h2>Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} - {mentor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
