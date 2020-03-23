import React, { Component } from "react";

import api from "../../services/api";
import "./style.css";

export default class Perfil extends Component {
  state = {
    minibio: {},
    
    error: ""
  };

  componentDidMount() {
    this.getAbout();
  }

  getAbout = async () => {
    try {
      const response = await api.get("/minbio");
      this.setState({ minibio: response.data[0] });
    } catch (error) {}
  };

  render() {
    const { minibio } = this.state;
    console.log(minibio);
    return (
      <>
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
                      <p>{minibio.about}</p>
                      <ul className="list basic_info">
                        <li>
                          <a>
                            <i className="far fa-calendar-alt" />
                            {minibio.born}
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fas fa-phone" />
                            {minibio.tel}
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="far fa-envelope" />
                            {minibio.email}
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fas fa-home" />
                            {minibio.city}
                          </a>
                        </li>
                      </ul>
                      <ul className="list personal_social">
                        <li>
                          <a href={minibio.face} target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href={minibio.tt} target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href={minibio.git} target="_blank">
                            <i class="fab fa-github-alt" />
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
      </>
    );
  }
}
