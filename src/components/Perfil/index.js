import React from "react";
import "./style.css";

const Perfil = props => {
  return (
    <>
      {/*================Home Banner Area =================*/}
      <section id="Home" className="home_banner_area">
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <img src={require("../../img/personal.jpg")} width="500" />
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Seja Bem Vindo ao meu site, Eu sou</h6>
                    <h3>Igor Gabrig</h3>
                    <h4>Estudante de Engenharia de Software</h4>
                    <p>
                      Neste site você conhecerá um pouco mais sobre mim, como
                      meus interesses, minhas habilidades(skills), experiências,
                      projetos e realizações, além de poder dar uma espiada em
                      toda minha carreira até aqui!
                    </p>
                    <ul className="list basic_info">
                      <li>
                        <a>
                          <i className="far fa-calendar-alt" /> 19 de Outrubro
                          de 1996
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fas fa-phone" /> (43) 98418-6671
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="far fa-envelope" />{" "}
                          igor_gabrig@hotmail.com
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fas fa-home" /> Cornélio Procópio - PR
                        </a>
                      </li>
                    </ul>
                    <ul className="list personal_social">
                      <li>
                        <a
                          href="https://www.facebook.com/igor.gabrig"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/IgorGabrig"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <a
                      href="https://drive.google.com/file/d/1_9hiHFHgJXbq7u8zmY6LfUBaIVg49uCS/view?usp=sharing"
                      class="genric-btn info circle"
                      target="_blank"
                    >
                      Currículo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}
    </>
  );
};

export default Perfil;
