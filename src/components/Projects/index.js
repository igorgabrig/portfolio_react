import React, { Component } from "react";
import api from "../../services/api";

import "./style.css";

export default class Projects extends Component {
  state = {
    projects: [],
    error: ""
  };

  componentDidMount() {
    this.getAbout();
  }

  getAbout = async () => {
    try {
      const response = await api.get("/project");
      this.setState({ projects: response.data });
    } catch (error) {}
  };

  render() {
    const { projects } = this.state;

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
              {projects.map(project => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print proj">
                    <a href={project.link}>
                      <div className="h_gallery_item">
                        <div className="g_item_text">
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="more_btn">
              <a
                className="main_btn"
                href="https://github.com/igorgabrig?tab=repositories"
                target="_blank"
              >
                + Veja Mais
              </a>
            </div>
          </div>
        </section>
        {/*================End Home Gallery Area =================*/}
      </>
    );
  }
}
