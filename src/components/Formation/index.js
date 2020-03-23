import React, { Component } from "react";
import api from "../../services/api";

import './style.css';





export default class Formation extends Component {
  state = {
    expirience: [],
    error: ""
  };
  
  componentDidMount() {
      this.getExp();
  }


  getExp = async () => {
    try {
      const response = await api.get("/experience");
      this.setState({ expirience: response.data });
    } catch (error) {}
  };

  render(){
    const { expirience } = this.state;

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
                {expirience.map(exp => {
                  return(
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>{exp.year}</p>
                      </div>
                      <div className="media-body">
                        <h4>{exp.company}</h4>
                        <p>{exp.details}</p>
                      </div>
                    </div>
                  </li> 
                  ); 
                })}                
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
  }
};