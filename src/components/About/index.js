import React from "react";
import "./style.css";

const About = props => {
  return (
    <>
      {/*================Welcome Area =================*/}
      <section id="About" className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>Sobre Mim</h4>
                <p>
                  Nasci em Brasilia - DF, mas vivi por mais de 15 anos em São
                  Pedro da Aldeia- RJ, me considero um Brasiliense de Alma
                  Carioca, atualmente vivo em Cornélio Procópio durante o
                  periodo letivo e durante as férias volto para minha cidade no
                  Rio de Janeiro.
                  <br />
                  Tenho 22 anos de idade, e estou cursando Engenharia de
                  Software pela Universidade Técnologica Federal do Parána -
                  UTFPR. Sou amante da técnologia e apaixonado por histórias e
                  quadrinhos, além de filmes e séries.
                  <br />
                  Hoje me encontro encerrando minhas atividades como Diretor do
                  Diretrio Acadêmico de Computação - DACOMP, e iniciando as
                  atividades como vice-presidente do ramo estudantil do IEEE -
                  UTFPR. Espero muitas novas experiências e oportunidades de
                  aprendizado neste novo caminho. Estou sempre a procura de
                  desafios, e como somos o primeiro ramo estudantil da UTFPR,
                  acredito que desafio não faltará neste caminho.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i class="fas fa-atlas" />
                      <h4>Interesse</h4>
                      <p>
                        Aprender todos os dias e poder passar meu conhecimento
                        para as pessoas da melhor forma possível
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i class="fas fa-language" />
                      <h4>Idioma</h4>
                      <p>
                        Portugeus = Nativo
                        <br />
                        Inglês = Básico
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i class="fas fa-user-graduate" />
                      <h4>Formação</h4>
                      <p>Graduando em Engenharia de Software</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="welcome_text">
                <h4>Habilidades</h4>
              </div>
              <div className="tools_expert">
                <div className="skill_main">
                  <div className="skill_item">
                    <h4>
                      Photoshop - <span className="counter">65</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      Bootstrap - <span className="counter">40</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      HTML - <span className="counter">70</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      CSS - <span className="counter">60</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      React - <span className="counter">10</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      C - <span className="counter">60</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      Java - <span className="counter">30</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill_item">
                    <h4>
                      Node - <span className="counter">10</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
