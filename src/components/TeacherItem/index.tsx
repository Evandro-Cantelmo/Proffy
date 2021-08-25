import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/66844968?v=4"
          alt="Evandro Cantelmo"
        />
        <div>
          <strong>Evandro Cantelmo</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos atque sunt
        quaerat ea, fuga, tenetur
        <br />
        <br />
        voluptas unde quas itaque quibusdam, inventore quia! Ex pariatur
        necessitatibus eaque molestias voluptas, et optio.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
