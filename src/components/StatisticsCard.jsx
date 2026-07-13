import "./StatisticsCard.css";

export default function StatisticsCard({
  totalTasks,
  completedTasks,
  xp,
  streak,
}) {
  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="card stats-card border-0 mb-4">
      <div className="card-body">

        <h4 className="stats-title">
          📊 Statistics
        </h4>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="stats-box">
              <h2>📝</h2>
              <h5>{totalTasks}</h5>
              <p>Total Tasks</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stats-box">
              <h2>✅</h2>
              <h5>{completedTasks}</h5>
              <p>Completed</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stats-box">
              <h2>⭐</h2>
              <h5>{xp}</h5>
              <p>Total XP</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stats-box">
              <h2>🔥</h2>
              <h5>{streak}</h5>
              <p>Day Streak</p>
            </div>
          </div>

        </div>

        <hr />

        <h6 className="mb-3">
          Productivity
        </h6>

        <div className="progress">

          <div
            className="progress-bar"
            style={{
              width: `${completionRate}%`,
            }}
          >
            {completionRate}%
          </div>

        </div>

      </div>
    </div>
  );
}