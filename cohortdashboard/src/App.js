import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React Batch 1",
      technology: "React",
      coach: "Rahul",
      status: "Ongoing",
    },
    {
      name: "Java Batch 2",
      technology: "Spring Boot",
      coach: "Priya",
      status: "Completed",
    },
    {
      name: "Angular Batch",
      technology: "Angular",
      coach: "Arun",
      status: "Ongoing",
    },
  ];

  return (
    <div>
      <h1>Cognizant Cohort Dashboard</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;