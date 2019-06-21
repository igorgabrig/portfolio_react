import React, { Component } from "react";
import "./style.css";

const Rodape = props => {
  return (
    <>
      <footer className="footer_area p_120">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-lg-5 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>About Me</h3>
                </div>
                <p>
                  Do you want to be even more successful? Learn to love learning
                  and growth. The more effort you put into improving your
                  skills,
                </p>
                <p>
                  Copyright All rights reserved | This template is made with{" "}
                  <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </aside>
            </div>
            <div className="col-lg-2">
              <aside className="f_widget social_widget">
                <div className="f_title">
                  <h3>Follow Me</h3>
                </div>
                <p>Let us be social</p>
                <ul className="list">
                  <li>
                    <a
                      href="https://www.facebook.com/igor.gabrig"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/IgorGabrig" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/igorgabrig" target="_blank">
                      <i class="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Rodape;
