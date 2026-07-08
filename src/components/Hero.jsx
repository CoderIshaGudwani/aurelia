import Clock from "./Clock";
import Quote from "./Quote";

export default function Hero() {
  return (
    <section className="container hero fade-up">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <h1 className="display-2 fw-bold">
            Grow.<br />
            Focus.<br />
            Transform.
          </h1>

          <p className="lead my-4">
            Aurelia transforms every productive session into a beautiful journey.
          </p>

          <Clock />

          <div className="my-4">
            <Quote />
          </div>

          <button className="btn btn-light rounded-pill px-5 py-3 fw-bold">
            Begin Your Journey
          </button>

        </div>

        <div className="col-lg-6 text-center">

          <div className="glass p-5">

            <h1 className="display-1 floating">
              🦋
            </h1>

            <h4>Today's Companion</h4>

            <p className="opacity-75">
              Caterpillar → Butterfly
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

