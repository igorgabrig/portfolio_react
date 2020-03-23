import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./style.css";

export default class Header extends Component {

  componentDidMount() {

  }

  getApiProduct = async () => {
    
  }
  render() {
    return (
      <>
      {/*================Header Menu Area =================*/}
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <AnchorLink className="nav-link" href="#Home">
                      Home
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#About">
                      About
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#Formation">
                      Formação
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#Blog">
                      Blog
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#Projects">
                      Projetos
                    </AnchorLink>
                  </li>

                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#Contact">
                      Contato
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {/*================Header Menu Area =================*/}
    </>
    )
  }
}