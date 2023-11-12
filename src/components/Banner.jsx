import { Link } from "react-router-dom";
import React from "react";
//CSS
import style from "./Banner.module.css";
//IMG
import imgSection from "../assets/img-banner.svg";

const SectionPage = () => {
  return (
    <section className={style.sectionTop}>
      <div className={style.sectionTexto}>
        <h1>Descubra Sua Verdadeira Identidade Digital</h1>
        <p>
          Explore uma jornada de autodescoberta digital no AvatarMind. Crie avatares que representem quem você é de verdade e navegue pelas águas
          emocionais com confiança.
        </p>
        <div className={style.containerBtn}>
          {/* <button className="btn-primary">Começar agora</button>
          <button className={style.btnSecondary}>Saiba mais</button> */}
          <Link className="btn" to={"/form"}>
            Começar
          </Link>
          <Link className={`btn ${style.marginBtn}`} to={"/more"}>
            Saiba Mais
          </Link>
        </div>
      </div>
      <div className={style.sectionImg}>
        <img src={imgSection} alt="" />
      </div>
    </section>
  );
};

export default SectionPage;
