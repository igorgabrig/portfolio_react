import React from "react";
import "./style.css";

const Contact = props => {
  return (
    <>
      <section id="Contact" className="feature_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Contato</h2>
          </div>
          <div className="feature_inner row" />

         

          <form action="https://formspree.io/igor_gabrig@hotmail.com"
            method="POST">
          
            <div class="form-row">
              <div class="form-group  col-md-6">
                <label for="validationCustom01">Nome</label>
                <input
                  name="Nome"
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Nome"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>

              <div class="form-group col-md-6">
                <label for="validationCustom02">Email</label>
                <input
                  name="E-mail"
                  type="email"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="Email"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>

              <div class="form-group col-md-12">
                <label for="validationCustom04">Assunto</label>
                <input
                  name="Assunto"
                  type="text-area"
                  class="form-control"
                  id="validationCustom04"
                  placeholder="Assunto"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>

              <div class="form-group col-mde-12">
                <label for="validationCustom03">Mensagem</label>

                <textarea
                  name="Menssagem"
                  class="form-group"
                  placeholder="Messagem"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Message'"
                  required
                />

                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" value="send">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
