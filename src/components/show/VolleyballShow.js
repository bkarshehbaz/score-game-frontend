import ScoreCard from "../../features/scores/ScoreCard";
import TimerShow from "../../features/timer/TimerShow";
import "../control/styles/ScoreBoard.scss";

export default function VolleyballShow({
  team1,
  team2,
  homeScore,
  awayScore,
  homeGames,
  awayGames,
  pastHomeGames,
  pastAwayGames,
  homeSets,
  awaySets,
  isTieBreak,
  showTimer,
  minutes,
  seconds,
  server,
}) {
  return (
    <div className="scoreboard">
      <div className="scoreboard-container container justify-content-center align-items-center">
        <div className="row">
          <div className="col scoreboard-card card">
            <div className="card-header row g-0 justify-content-center">
              <h5 className="col-sm-12 col-md-12 text-center">Sets Total</h5>
            </div>
            <table className="table table-borderless card-body col">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-period col-2"
                    >
                      Set 1
                    </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-period col-2"
                    >
                      Set 2
                    </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-period col-2"
                    >
                      Set 3
                    </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-period col-2"
                    >
                      Set 4
                    </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-period col-2"
                    >
                      Set 5
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{team1}</th>
                  {pastHomeGames[0] ? <td>{pastHomeGames[0]}</td> : <td>0</td>}
                  {pastHomeGames[1] ? <td>{pastHomeGames[1]}</td> : <td>0</td>}
                  {pastHomeGames[2] ? <td>{pastHomeGames[2]}</td> : <td>0</td>}
                  {pastHomeGames[3] ? <td>{pastHomeGames[3]}</td> : <td>0</td>}
                  {pastHomeGames[4] ? <td>{pastHomeGames[4]}</td> : <td>0</td>}
                </tr>
                <tr>
                  <th scope="row">{team2}</th>
                  {pastAwayGames[0] ? <td>{pastAwayGames[0]}</td> : <td>0</td>}
                  {pastAwayGames[1] ? <td>{pastAwayGames[1]}</td> : <td>0</td>}
                  {pastAwayGames[2] ? <td>{pastAwayGames[2]}</td> : <td>0</td>}
                  {pastAwayGames[3] ? <td>{pastAwayGames[3]}</td> : <td>0</td>}
                  {pastAwayGames[4] ? <td>{pastAwayGames[4]}</td> : <td>0</td>}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col scoreboard-card card">
            <div className="card-header row g-0 justify-content-center">
              <h5 className="col-sm-12 col-md-12 text-center">TieBreak</h5>
            </div>
            <div className="row g-0 justify-content-center two-buttons">
              <ScoreCard
                score={homeScore}
                tieBreak={isTieBreak}
                player={"home"}
                title={team1}
              />
              <ScoreCard
                score={awayScore}
                tieBreak={isTieBreak}
                player={"away"}
                title={team2}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col scoreboard-card card">
            <div className="card-header row g-0 justify-content-center">
              <h5 className="col-sm-12 col-md-12 text-center">Set</h5>
            </div>
            <div className="row g-0 justify-content-center">
              <ScoreCard score={homeGames} player={"home"} />
              <ScoreCard score={awayGames} player={"away"} />
            </div>
          </div>

          <div className="col scoreboard-card card">
            <div className="card-header row g-0 justify-content-center">
              <h5 className="col-sm-12 col-md-12 text-center">Juego</h5>
            </div>
            <div className="row g-0 justify-content-center">
              <ScoreCard score={homeSets} player={"home"} />
              <ScoreCard score={awaySets} player={"away"} />
            </div>
          </div>
        </div>

        <form className="scoreboard-card row g-0 justify-content-center">
          <div className="col-sm-12 col-md-6 card bg-transparent text-center">
            <div className="card-header">
              <input type="text" className="col-sm-6" value={team1} readOnly />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 card bg-transparent text-center">
            <div className="card-header">
              <input type="text" className="col-sm-6" value={team2} readOnly />
            </div>
          </div>
        </form>

        <div className="scoreboard-card card">
          <div className="card-header row g-0 justify-content-center">
            <h5 className="col-sm-12 col-md-12 text-center">Puntos</h5>
          </div>
          <div className="row g-0 justify-content-center">
            <ScoreCard
              score={homeScore}
              player={"home"}
              server={server === "home"}
            />
            <ScoreCard
              score={awayScore}
              player={"away"}
              server={server === "away"}
            />
          </div>
        </div>
        {showTimer ? (
          <div className="scoreboard-card row g-0 justify-content-center">
            <TimerShow minutes={minutes} seconds={seconds} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
