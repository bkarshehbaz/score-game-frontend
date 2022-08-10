import { useDispatch } from "react-redux";
import { updateServer } from "./scoreSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseballBall,
  faVolleyballBall,
} from "@fortawesome/free-solid-svg-icons";

export default function ScoreCard({
  title,
  score,
  updateScore,
  points,
  advantage,
  server,
  player,
  tennis,
}) {
  const dispatch = useDispatch();
  const pointButton = (point, index) => (
    <button
      key={index}
      type="button"
      className="btn btn-primary btn-sm btn-score col-2 "
      onClick={() => dispatch(updateScore([point, player]))}
    >
      {point > 0 && !tennis ? `+${point}` : point}
    </button>
  );

  return (
    <div
      className={
        updateScore
          ? "col-sm-12 col-md-6 card text-center"
          : "col-sm-12 col-md-6 bg-transparent card text-center"
      }
    >
      <div className="card-header">
        <h5>{title}</h5>
        {server ? (
          <FontAwesomeIcon
            size="lg"
            icon={tennis ? faBaseballBall : faVolleyballBall}
          />
        ) : (
          <div
            onClick={() => {
              if (updateScore) {
                dispatch(updateServer());
              }
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
      {updateScore ? (
        <div className="card-body">
          <span className="score row justify-content-center">
            {advantage === undefined ? (
              score
            ) : advantage === "" ? (
              score
            ) : advantage === player ? (
              "AD"
            ) : (
              <div>&nbsp;</div>
            )}
          </span>
          <div className="row justify-content-center two-buttons">
            {points.map((point, index) => pointButton(point, index))}
          </div>
        </div>
      ) : (
        <div className="card-body share-card-body">
          <span className="score row justify-content-center">
            {advantage === undefined ? (
              score
            ) : advantage === "" ? (
              score
            ) : advantage === player ? (
              "AD"
            ) : (
              <div>&nbsp;</div>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
