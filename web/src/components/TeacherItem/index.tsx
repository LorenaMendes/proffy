import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35077553?s=460&v=4" />
              <div>
                <strong>Lorena Mendes</strong>
                <span>Ciência da Computação</span>
              </div>
            </header>

            <p>
              Computer Science student at Federal University of Minas Gerais.
              <br /><br />
              Currently working on architecture, implementation and maintenance of automated web crawlers.
            </p>

            <footer>
              <p>
                Preço/hora
                <strong>R$ 100,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
          </article>
    );
}

export default TeacherItem;