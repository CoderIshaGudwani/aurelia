export default function DashboardHome() {
    return (
        <div className="container-fluid p-4">

            <div className="row g-4">

                <div className="col-lg-4">

                    <div className="card shadow border-0 h-100">

                        <div className="card-body">

                            <h5>🍅 Focus Timer</h5>

                            <h1 className="display-5">
                                25:00
                            </h1>

                            <button className="btn btn-success w-100">
                                Start Focus Session
                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 h-100">

                        <div className="card-body">

                            <h5>✅ Today's Tasks</h5>

                            <h2>0</h2>

                            <p className="text-muted fst-italic">
                                🌱 Every completed task helps your butterfly grow.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow border-0 h-100">

                        <div className="card-body">

                            <h5>🦋 Evolution Progress</h5>

                            <div className="progress mb-3">

                                <div
                                    className="progress-bar bg-success"
                                    style={{ width: "25%" }}
                                ></div>

                            </div>
                            🐛 25 XP / 100 XP

                            <small className="text-muted d-block mt-2">
                                One more productive day at a time.
                            </small>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}