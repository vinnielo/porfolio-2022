import "./Splash.css";
import Typewriter from "typewriter-effect";

export default function Splash() {
  return (
    <div className="masthead segment">
      <div className="ui page grid">
        <div className="column">
          <div className="introduction">
            <h1 className="ui inverted header">
              {/* <span className="text"> */}
              {/* Perspective background from old{" "}
                <a href="https://www.semantic-ui.com/" target="_new">
                  Semantic UI
                </a>{" "}
                website
              </span> */}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Vinnie Lopez")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcomes You")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("To Enter")
                    .start();
                }}
              />{" "}
              <a href="/about">Click Here</a>
            </h1>
            <div className="ui hidden divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
