import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/home.scss";

export default function Home() {
  const history = useHistory();

  const sports = [
    "Football",
    "Basketball",
    "Tennis",
    "Rugby",
    "Handball",
    "Volleyball",
    "Hockey",
  ];

  const sportCard = (sport, key) => (
    <div
      key={key}
      className="col"
      onClick={() => history.push("/scoreboard/" + sport)}
    >
      <div className="card sport-card border-secondary text-center">
        <div className="card-body">
          <h3>{sport}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-container row row-cols-1 row-cols-md-2 g-4">
      {sports.map((sport, index) => sportCard(sport, index))}
    </div>
  );
}
