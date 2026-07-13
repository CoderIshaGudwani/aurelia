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
      <div className="card shadow border-0 mb-4">
        <div className="card-body">
  
          <h4 className="mb-4">📊 Statistics</h4>
  
          <div className="row text-center">
  
            <div className="col-md-3">
              <h2>📝</h2>
              <h5>{totalTasks}</h5>
              <p>Total Tasks</p>
            </div>
  
            <div className="col-md-3">
              <h2>✅</h2>
              <h5>{completedTasks}</h5>
              <p>Completed</p>
            </div>
  
            <div className="col-md-3">
              <h2>⭐</h2>
              <h5>{xp}</h5>
              <p>Total XP</p>
            </div>
  
            <div className="col-md-3">
              <h2>🔥</h2>
              <h5>{streak}</h5>
              <p>Day Streak</p>
            </div>
  
          </div>
  
          <hr />
  
          <h6 className="mb-2">
            Productivity
          </h6>
  
          <div className="progress">
  
            <div
              className="progress-bar bg-success"
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