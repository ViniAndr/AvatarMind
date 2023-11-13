import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// CSS
import styles from "./Navbar.module.css";
// IMG
import LogoImg from "../assets/avatarMind.svg";
import LogoImgNoText from "../assets/avatarMindNoText.svg";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Função para atualizar a largura da tela no estado
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // um ouvidor de eventos, caso a janela seja redimensionada, chama a minha função
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>
        <img className={styles.logo} src={screenWidth > 640 ? LogoImg : LogoImgNoText} alt="Logo" />
      </Link>
      <ul className={styles.links_list}>
        <li>
          <Link to={"/"} className="btn">
            Home
          </Link>
          <Link to={"/login"} className="btn btn-margin">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
