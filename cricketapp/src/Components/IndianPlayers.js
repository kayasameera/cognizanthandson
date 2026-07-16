import React from "react";

function IndianPlayers() {
  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Shubman Gill",
    "KL Rahul",
    "Hardik Pandya",
    "Ravindra Jadeja",
  ];

  const oddPlayers = players.filter((player, index) => index % 2 === 0);
  const evenPlayers = players.filter((player, index) => index % 2 !== 0);

  const T20Players = [
    "Surya Kumar Yadav",
    "Rinku Singh",
    "Tilak Varma",
  ];

  const RanjiPlayers = [
    "Cheteshwar Pujara",
    "Ajinkya Rahane",
    "Wriddhiman Saha",
  ];

  const IndianPlayersMerged = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ol>
        {oddPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ol>

      <h2>Even Players</h2>
      <ol>
        {evenPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ol>

      <h2>List of Indian Players Merged</h2>
      <ol>
        {IndianPlayersMerged.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ol>
    </div>
  );
}

export default IndianPlayers;