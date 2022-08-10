import { useDispatch } from "react-redux";
import { setShowExtraTime } from "./infoSlice";

export default function InfoCard({
  title,
  info,
  incrementInfo,
  decrementInfo,
  extraTime,
}) {
  const dispatch = useDispatch();

  return (
    <div
      className={
        incrementInfo && decrementInfo
          ? "col-sm-12 col-md-6 card text-center"
          : "col-sm-12 col-md-6 bg-transparent card text-center"
      }
    >
      {title ? (
        <div className="card-header">
          <h5>{title}</h5>
        </div>
      ) : null}
      {incrementInfo && decrementInfo ? (
        <div className="card-body">
          <span className="score row justify-content-center">{info}</span>

          <div className="row justify-content-center two-buttons">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-period col-2"
              onClick={() => dispatch(decrementInfo())}
            >
              -1
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-period col-2"
              onClick={() => dispatch(incrementInfo())}
            >
              +1
            </button>
          </div>

          {extraTime ? (
            <button
              type="button"
              className="btn-sm col btn-extra-time btn btn-primary"
              onClick={() => dispatch(setShowExtraTime())}
            >
              Mostrar Tiempo Extra
            </button>
          ) : null}
        </div>
      ) : (
        <div className="card-body share-card-body">
          <span className="score row justify-content-center">{info}</span>
        </div>
      )}
    </div>
  );
}
