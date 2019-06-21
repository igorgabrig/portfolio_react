import React, { Fragment } from "react"; // Novo elemento importado { Fragment }

import Header from "../../components/Header"; // Importação do Header
import Rodape from "../../components/Footer";
import Perfil from "../../components/Perfil";
import About from "../../components/About";
import Formation from "../../components/Formation";
import Blog from "../../components/Blog";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Perfil id="Perfil" />
      <About />
      <Formation />
      <Blog />
      <Projects />
      <Contact />
      <Rodape />
    </Fragment>

    
  );
};
export default Main;
