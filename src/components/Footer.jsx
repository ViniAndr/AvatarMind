import style from "./Footer.module.css";

//IMG
import ImgWhatsapp from "../assets/whatsapp.svg";
import ImgEmail from "../assets/email.svg";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.structureFooter}>
        <div className={style.apoi}>
          <h2>Apoio</h2>
          <p>Escola Estadual José Ribeiro Caminha</p>
          <p>Uninassau</p>
        </div>
        <div>
          <h2>Contatos</h2>
          <ul>
            <li>
              <img src={ImgWhatsapp} alt="" />
              <span>(82) 98751-7295</span>
            </li>
            <li>
              <img src={ImgWhatsapp} alt="" />
              <span>(82) 99363-8612</span>
            </li>
            <li>
              <img src={ImgEmail} alt="" />
              <span>davidgabriel0100@gmail.com</span>
            </li>
            <li>
              <img src={ImgEmail} alt="" />
              <span>myllenepedrosa@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Aviso Importante: Este site é destinado exclusivamente ao uso universitário e representa uma colaboração entre os cursos de Psicologia e
            Ciência da Computação. Aqui, buscamos promover a interdisciplinaridade e explorar os aspectos emocionais e tecnológicos da identidade
            digital.
          </p>
        </div>
      </div>
      <p className={style.Copyright}>Copyright © 2023</p>
    </footer>
  );
};

export default Footer;
