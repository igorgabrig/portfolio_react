import React, { Component } from "react";

import api from "../../services/api";
import "./style.css";

export default class About extends Component {
  state = {
    habilities: [],
    biography: [],
    infos: [],
    error: ""
  };

  componentDidMount() {
    this.getSkill();
    this.getAbout();
    this.getInfo();
  }

  getSkill = async () => {
    try {
      const response = await api.get("/skills");
      this.setState({ habilities: response.data });
    } catch (error) {}
  };

  getAbout = async () => {
    try {
      const response = await api.get("/biography");
      this.setState({ biography: response.data });
    } catch (error) {}
  };

  getInfo = async () => {
    try {
      const response = await api.get("/infos");
      this.setState({ infos: response.data });
    } catch (error) {}
  };

  render() {
    const { habilities } = this.state;
    const { biography } = this.state;
    const { infos } = this.state;
    return (
      <>
        {/*================Welcome Area =================*/}
        <section id="About" className="welcome_area p_120">
          <div className="container">
            <div className="row welcome_inner">
              <div className="col-lg-6">
                <div className="welcome_text">
                  <h4>Sobre Mim</h4>

                  {biography.map(about => {
                    return <p>{about.about}</p>;
                  })}

                  <div className="row">
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i class="fas fa-atlas" />
                        <h4>Interesse</h4>

                        {infos.map(info => {
                          return <p>{info.interests}</p>
                        })}
                        
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i class="fas fa-language" />
                        <h4>Idioma</h4>

                        {infos.map(info => {
                          return <p>{info.languages}</p>
                        })}

                         
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i class="fas fa-user-graduate" />
                        <h4>Formação</h4>

                        {infos.map(info => {
                          return <p>{info.formations}</p>
                        })}

                       
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
                    {habilities.map(hability => {
                      return (
                        <div className="skill_item">
                          <h4>
                            {hability.hability} -{" "}
                            <span className="counter">{hability.value}</span>%
                          </h4>
                          <div className="progress_br">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="{hability.value}"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
