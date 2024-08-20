import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/Logotipo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="buttonzap">
          <a href="https://api.whatsapp.com/send?phone=559982100230&" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <nav className="menu-topo">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#rodape">Fale Conosco</a></li>
          </ul>
        </nav>

        <div className="interface">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logotipo" />
            </Link>
          </div>
          <div className="nome">
            <h1>Cantinho da<br />Rosa do Deserto</h1>
          </div>

          <div className="search-bar">
            <input type="text" id="search-input" placeholder="Buscar..." style={{ width: '500px' }} />
            <button id="search-button" type="button"><i className="bi bi-search"></i></button>
          </div>

          <div className="btn-icones">
            <a href="#"><button><i className="bi bi-basket"></i></button></a>
            <button className="enter-button">
              <i className="bi bi-person"></i>
              <span>
                <h4>Minha Conta</h4>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="categoria-container">
        <div className="categoria-barra">
          <nav className="submenu-topo">
            <ul>
              <li className="special"><a href="/rosasdodeserto">Rosas do Deserto</a></li>
              <li className="special"><a href="/suculentasecactos">Suculentas & Cactos</a></li>
              <li className="special"><a href="/vasos">Vasos & Acessórios</a></li>
              <li className="special"><a href="/adubos">Adubos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
