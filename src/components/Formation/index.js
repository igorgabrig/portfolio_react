import React from "react";
import './style.css';

const Formation = props => {
  return (
    <>
      <section id="Formation" className="mytabs_area p_120">
        <div className="container">
          <div className="tabs_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Minhas Experiências
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Minha Formação
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <ul className="list">
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2015</p>
                      </div>
                      <div className="media-body">
                        <h4>NPI Brasil</h4>
                        <p>
                          Estágiario em Web Developer <br />
                          São Pedro da Aldeia, Rio de Janeiro
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2016</p>
                      </div>
                      <div className="media-body">
                        <h4>NPI Brasil</h4>
                        <p>
                          Junior Web Developer <br />
                          São Pedro da Aldeia, Rio de Janeiro
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2017</p>
                      </div>
                      <div className="media-body">
                        <h4>DACOMP</h4>
                        <p>
                          Diretor Acadêmico<br />
                          UTFPR, Cornélio Procópio - PR
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2019</p>
                      </div>
                      <div className="media-body">
                        <h4>Ramo Estudantil IEEE</h4>
                        <p>
                          Vice-Presidente<br />
                          UTFPR, Cornélio Procópio - PR
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              
              
              
              
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ul className="list">
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2014</p>
                      </div>
                      <div className="media-body">
                        <h4>Intitudo Aredes Rodrigues</h4>
                        <p>
                          Graduação Escolar<br />
                          São Pedro da Aldeia, Rio de Janeiro
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2016</p>
                      </div>
                      <div className="media-body">
                        <h4>NPI Brasil</h4>
                        <p>
                          Curso Técnico em TI <br />
                          São Pedro da Aldeia, Rio de Janeiro
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>2016<br/> - <br/>Atualmente</p>
                      </div>
                      <div className="media-body">
                        <h4>UTFPR</h4>
                        <p>
                        Engenharia de Software <br />
                          Cornélio Procópio, Paraná
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formation;