import "./Splash.css";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="splash-container"
    >
      {/* <div className="masthead segment">
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
      <Button variant="contained" href="/blog">
        Click Here
      </Button> */}{" "}
      <div id="intro" className="view">
        <div className="mask rgba-black-strong">
          <div className="container-fluid d-flex align-items-center justify-content-center h-100">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-10">
                <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                  Travel
                </h2>

                <hr className="hr-light" />

                <h4 className="white-text my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti consequuntur.
                </h4>
                <Button variant="contained" href="/blog" sx={{mb: 2}}>
                  Click Here
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="mt-5">
        <div className="container">
          <section id="best-features" className="text-center">
            <h2 className="mb-5 font-weight-bold">Best Features</h2>

            <div className="row d-flex justify-content-center mb-4">
              <div className="col-md-8">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi voluptate hic provident nulla repellat facere esse
                  molestiae ipsa labore porro minima quam quaerat rem, natus
                  repudiandae debitis est sit pariatur.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-5">
                <i className="fa fa-camera-retro fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Experience</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-md-4 mb-1">
                <i className="fa fa-heart fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Happiness</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-md-4 mb-1">
                <i className="fa fa-bicycle fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Adventure</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section id="examples" className="text-center">
            <h2 className="mb-5 font-weight-bold">Stunning Examples</h2>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="mask rgba-white-slight"></div>
                </div>

                <h4 className="my-4 font-weight-bold">Heading</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-5" />
        </div>
      </main>
    </motion.div>
  );
}
