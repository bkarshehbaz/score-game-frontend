import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInterval } from "../../components/control/useInterval";
import {
  incrementSeconds,
  decrementSeconds,
  updateMinutes,
  updateSeconds,
  selectMinutes,
  selectSeconds,
  selectTimerActive,
  setTimerActive,
  resetTime,
  updateInitialTime,
} from "./timerSlice";

export default function Timer({ ascending, extraTime }) {
  const dispatch = useDispatch();
  const padNumber = (number) => number.toString().padStart(2, "0");

  const minutes = useSelector(selectMinutes);
  const seconds = useSelector(selectSeconds);
  const timerActive = useSelector(selectTimerActive);

  useInterval(() => {
    if (timerActive && ascending) {
      dispatch(incrementSeconds(1));
    } else if (timerActive) {
      dispatch(decrementSeconds(1));
    }
  }, 1000);

  const timeButton = (time, index) => (
    <button
      key={index}
      type="button"
      className="btn btn-primary btn-sm btn-extra-time col-2"
      onClick={() => {
        dispatch(updateInitialTime(time));
        dispatch(updateMinutes(time));
        dispatch(updateSeconds(0));
      }}
    >
      {time}:{padNumber(0)}
    </button>
  );

  return (
    <div className="scoreboard-timer col-sm-12 col-md-6 card text-center">
      <div className="card-header">
        <h5>Tiempo</h5>
      </div>
      {
        <div>
          <div className="card-body timer-body top-bottom-buttons timer-wrapper-parent">
            <div className="buttons-wrapper">
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(decrementSeconds(60))}
              >
                -60
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(decrementSeconds(10))}
              >
                -10
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(decrementSeconds(1))}
              >
                -1
              </button>
            </div>

            <span className="time">
              {padNumber(minutes)}:{padNumber(seconds)}
            </span>
            <div className="buttons-wrapper two">
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(incrementSeconds(1))}
              >
                +1
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(incrementSeconds(10))}
              >
                +10
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm btn-time"
                onClick={() => dispatch(incrementSeconds(60))}
              >
                +60
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            {extraTime
              ? extraTime.map((time, index) => timeButton(time, index))
              : null}
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-time-control col-4"
              onClick={() => dispatch(setTimerActive(true))}
            >
              Iniciar
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-time-control col-4"
              onClick={() => dispatch(setTimerActive(false))}
            >
              Pausa
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-time-control col-4"
              onClick={() => {
                dispatch(resetTime());
              }}
            >
              Reset
            </button>
          </div>
        </div>
      }
    </div>
  );
}
