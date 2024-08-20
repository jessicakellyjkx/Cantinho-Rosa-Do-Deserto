import React from 'react';
import logo from '../../assets/Logotipo.png'

const Footer = () => {
  return (
    <footer className="rodape" id="rodape">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logotipo" />
          <div className="nome-rodape">
            <h1>Cantinho da Rosa do Deserto</h1>
          </div>
        </div>

        <div className="pagamentos">
          <h2>Pagamentos Disponíveis</h2>
          <a href="#"><button><i className="bi bi-x-diamond-fill"></i></button>Pix</a>
          <a href="#"><button><i className="bi bi-credit-card"></i></button>Crédito</a>
        </div>

        <div className="redes-sociais">
          <h2>Redes Sociais</h2>
          <a href="#"><button><i className="bi bi-instagram"></i></button></a>
          <a href="#"><button><i className="bi bi-facebook"></i></button></a>
          <a href="#"><button><i className="bi bi-youtube"></i></button></a>
        </div>

        <div className="fale-conosco">
          <h2>Contato</h2>
          <a href="#"><button><i className="bi bi-whatsapp"></i></button>WhatsApp</a>
          <a href="#"><button><i className="bi bi-envelope"></i></button>E-mailㅤㅤ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
