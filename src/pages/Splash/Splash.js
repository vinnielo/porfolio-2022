import "./Splash.css";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";

export default function Splash() {
  return (
    <div className="splash-container">
    <div className="masthead segment">
      <div className="ui page grid">
        <div className="column">
          <div className="introduction">
            <h1 className="ui inverted header">

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
              />
            </h1>
            <div className="ui hidden divider"></div>
            <Button variant="contained" href="/about">
              Click Here
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
