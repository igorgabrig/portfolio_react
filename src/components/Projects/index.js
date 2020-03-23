import React from "react";
import "./style.css";

const Projects = props => {
  return (
    <>
      {/*================Home Gallery Area =================*/}
      <section id="Projects" className="home_gallery_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Projetos já Realizados</h2>
          </div>
        </div>
        <div className="container">
          <div className="gallery_f_inner row imageGallery1">
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img src={require("../../img/xadrez.jpg")} />
                  <a className="light">
                    <img src={require("../../img/icon.png")} />
                  </a>
                </div>

                <div className="g_item_text">
                  <h4>Jogo de Xadrez</h4>
                  <p>Desenvolvimento em C#</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img src={require("../../img/webservice.jpg")} />
                  <a className="light">
                    <img src={require("../../img/icon.png")} />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>WebService</h4>
                  <p>Desenvolvimento de um WebService simples em Python</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img src={require("../../img/react.png")} />
                  <a className="light">
                    <img src={require("../../img/icon.png")} />
                  </a>
                </div>
                <div className="g_item_text">
                  <h4>Primeiro Projeto em React</h4>
                  <p>Código fonte deste portfólio em React.js</p>
                </div>
              </div>
            </div>
          </div>

          <div className="more_btn">
            <a className="main_btn" href="https://github.com/igorgabrig?tab=repositories" target="_blank">
              + Veja Mais
            </a>
          </div>
        </div>
      </section>
      {/*================End Home Gallery Area =================*/}
    </>
  );
};

export default Projects;
