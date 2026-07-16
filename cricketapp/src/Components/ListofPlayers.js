import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 82 },
    { name: "Shubman Gill", score: 68 },
    { name: "KL Rahul", score: 73 },
    { name: "Hardik Pandya", score: 60 },
    { name: "Ravindra Jadeja", score: 78 },
    { name: "R. Ashwin", score: 55 },
    { name: "Mohammed Shami", score: 49 },
    { name: "Jasprit Bumrah", score: 65 },
    { name: "Mohammed Siraj", score: 58 },
    { name: "Yashasvi Jaiswal", score: 91 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <ol>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} - {player.score}
          </li>
        ))}
      </ol>

      <h2>List of Players having Scores Less than 70</h2>

      <ol>
        {lowScorers.map((player, index) => (
          <li key={index}>
            Mr. {player.name} - {player.score}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ListofPlayers;