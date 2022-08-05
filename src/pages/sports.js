import React from "react";
import FootballControl from "../components/control/FootballControl";
import BasketballControl from "../components/control/BasketballControl";
import TennisControl from "../components/control/TennisControl";
import RugbyControl from "../components/control/RugbyControl";
import HandballControl from "../components/control/HandballControl";
import VolleyballControl from "../components/control/VolleyballControl";
import HockeyControl from "../components/control/HockeyControl";
import { useParams } from "react-router-dom";
import "./styles/sports.scss";

export default function Sports() {
  const { sport } = useParams();

  const renderSportBoard = () => {
    switch (sport) {
      case "Football":
        return <FootballControl />;
      case "Basketball":
        return <BasketballControl />;
      case "Tennis":
        return <TennisControl />;
      case "Rugby":
        return <RugbyControl />;
      case "Handball":
        return <HandballControl />;
      case "Volleyball":
        return <VolleyballControl />;
      case "Hockey":
        return <HockeyControl />;
      default:
        return null;
    }
  };

  return (
    <div className="score-container">
      <div>{renderSportBoard(sport)}</div>
    </div>
  );
}
