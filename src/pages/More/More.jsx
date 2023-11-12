import styles from "./More.module.css";
const About = () => {
  return (
    <div className={`${styles.saberMais} container`}>
      <h1>Familia</h1>
      <p className={styles.paragrafo}>
        O núcleo familiar é o primeiro ao qual somos inseridos, a partir do nascimento nos é ensinado que aquelas pessoas que estão ao nosso redor são
        as que mais nos amam e nos cuidam, resumidamente, em teoria, seriam o nosso porto seguro aqueles em quem podemos e devemos confiar.
      </p>
      <p className={styles.paragrafo}>
        Na fase infantil não nos é permitido a tomada de decisões que afetem diretamente nosso desenvolvimento, a não ser em casos específicos que não
        mencionaremos aqui, sendo assim a família com a qual crescemos não é uma escolha nossa, mas a maneira como evoluímos dentro dela é?
      </p>
      <p className={styles.paragrafo}>
        A adolescência é uma fase caracterizada pelo surgimento de conflitos, tanto externos como internos no ser humano, portanto, é muito comum que
        em casa comece a haver discussões relacionadas a opiniões, vestimentas, comportamentos, gostos específicos, entre outros aspectos, sendo assim
        é possível levantar o questionamento sobre até onde é normal a interferência familiar e quando passa a ser abusiva em relação à construção do
        querer e da identidade de um adolescente?
      </p>
      <p className={styles.paragrafo}>Você se sente pressionado em relação a tomadas de decisões?</p>
      <p className={styles.paragrafo}>Sente que deve agradar a sua família?</p>
      <p className={styles.paragrafo}>Suas escolhas nesse momento, são para você ou para eles?</p>
      <p className={styles.paragrafo}>
        Tantas escolhas, tanta pressão, em um mundo que parece estar mais acelerado que o normal, te faz se sentir ansioso?
      </p>
      <p className={styles.paragrafo}>Continua aqui comigo e vamos trabalhar isso no próximo tópico.</p>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/Bl_dDB3Veog?si=z_mCd9ZcSiBDOOT7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className={styles.paragrafo}>
        Sentimento de aperto no peito, angústia, vontade de chorar por qualquer motivo, medo extremo para tomar qualquer mínima decisão, as vezes a
        ansiedade está escondida nas entrelinhas que você não consegue enxergar, mas que estão sempre lá para atrapalhar o seu dia a dia.
      </p>
      <p className={styles.paragrafo}>
        O adolescente passa por um dilema complexo referente a decisões que nortearam sua vida no futuro, é comum nessa fase uma pressão referente a
        qual carreira profissional desejam seguir, qual curso universitário escolherão, qual trabalho escolherão para se sustentar ou para ajudar com
        as contas da casa, junto com tanta responsabilidade ainda vêm aquilo que vimos antes, a ansiedade e a expectativa familiar, sendo assim, como
        manter a calma e pensar com cuidado sobre o que você quer por você mesmo, levando em conta a sua própria personalidade?
      </p>
      <p className={styles.paragrafo}>Mas para chegarmos à resposta dessa última pergunta primeiro teremos que responder estas:</p>
      <p className={styles.paragrafo}>Em que se baseia a minha identidade?</p>
      <p className={styles.paragrafo}>Do que tive que abrir mão para chegar até aqui, agradar minha família e me encaixar no meu grupo de amigos?</p>
      <p className={styles.paragrafo}>Agora que você chegou até aqui, é hora de refletir, nos encontraremos na próxima!</p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
    </div>
  );
};

export default About;
