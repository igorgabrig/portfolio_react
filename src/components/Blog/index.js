import React from "react";
import "./style.css";

const Project = props => {
  return (
    <>
      {/*================Feature Area =================*/}
      <section id="Blog" className="feature_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Blog</h2>
          </div>
          <div className="feature_inner row">
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-city" />
                <img
                  src={require("../../img/artificial_intelligence.png")}
                  width="500"
                />
                <h4>ARTIFICIAL INTELLIGENCE</h4>
                <p>
                  So, You've heard about this thing called artificial
                  intelligence. It’s changing the world, you’ve been told. It’s
                  going to drive your car, grow your food...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-skyline" />
                <img src={require("../../img/webservice.jpg")} width="500" />
                <h4>Cloud Computing</h4>
                <p>
                  O crescimento do mercado de Tecnologia da Informação no país
                  está diretamente relacionado à sintonia do setor com as
                  mudanças tecnológicas...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-sketch" />
                <img src={require("../../img/react.png")} width="500" />
                <h4>Using Proxies with Redux Types</h4>
                <p>
                  One of the most common problems that I run into when using
                  Redux is trying to figure out why an action is not being
                  captured by a reducer. For someone...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Feature Area =================*/}
    </>
  );
};

export default Project;
