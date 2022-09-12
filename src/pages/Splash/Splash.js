import "./Splash.css";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Splash() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="splash-container">
      <div className="masthead segment">
        <div className="ui page grid">
          <div className="column">
            <div className="introduction">
              <h1 className="ui inverted header">
                <Typewriter
                  className="text"
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Hi I'm Vinnie Lopez")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm a Coder")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm a Teacher")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm a Student")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm a Coder")
                      .start();
                  }}
                />
              </h1>
              <div className="ui hidden divider"></div>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" href="/about">
        Click Here
      </Button>
    </motion.div>
  );
}
