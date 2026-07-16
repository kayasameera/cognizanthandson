import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box}>
      <h3
        style={{
          color: cohort.status === "Ongoing" ? "green" : "blue",
        }}
      >
        {cohort.name}
      </h3>

      <dl>
        <dt>Technology</dt>
        <dd>{cohort.technology}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Status</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;