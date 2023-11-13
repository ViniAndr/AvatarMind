import { Link } from "react-router-dom";
//MODULO
import AvatarIcon from "../../components/AvatarIcon.jsx";
import { useParams } from "react-router-dom";
//hooks
import { useFetchDocument } from "../../hooks/useFetchDocument.jsx";
//CSS
import styles from "./ResponseForm.module.css";
const ResponseForm = () => {
  const { id } = useParams();
  const { document: response } = useFetchDocument("form", id);

  const responseInput = (key) => {
    if (typeof response[key] === "boolean") {
      return response[key] === true ? "SIM" : "NÃO";
    } else {
      return response[key];
    }
  };
  return (
    <div className="container">
      <div className={styles.btnVoltar}>
        <Link to={"/responses"} className="btn">
          Voltar
        </Link>
      </div>
      {response && (
        <>
          <div className={`card ${styles.cardAvatarDate}`}>
            <AvatarIcon form={response} />
            <div className={styles.date}>
              <h2>Dados Pessoais</h2>
              <p>
                <span className="title-p">Nome:</span> {response.name} {response.lastName}
              </p>
              <p>
                <span className="title-p">Idade:</span> {response.age}
              </p>
              <p>
                <span className="title-p">Genero:</span> {response.gender}
              </p>
              <p>
                <span className="title-p">Turma de Estudo:</span> {response.studyClass}
              </p>
              <p>
                <span className="title-p">E-mail: </span> {response.email}
              </p>
            </div>
          </div>
          {/* Questão 01 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Você tem ideia do que se trata uma identidade?</p>
            <p>- {responseInput("input0")}</p>
          </div>
          {/* Questão 02 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Se sente satisfeito com a sua identidade neste momento?</p>
            <p>- {responseInput("input1")}</p>
          </div>
          {/* Questão 03 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Seu núcleo familiar exerce influência na construção dessa identidade (suas escolhas)?</p>
            <p>- {responseInput("input2")}</p>
          </div>
          {/* Questão 04 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Você se sente confortável com a imagem que reflete para os outros?</p>
            <p>- {responseInput("input3")}</p>
          </div>
          {/* Questão 05 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Você se sente amado/aceito por ser quem você é, e por ter assumido essa identidade?</p>
            <p>- {responseInput("input4")}</p>
          </div>
          {/* Questão 06 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Oque você sente quando acha que está ansioso?</p>
            <p>- {responseInput("input5")}</p>
          </div>
          {/* Questão 07 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Em qual momento do dia você se considera mais ansioso?</p>
            <p>- {responseInput("input6")}</p>
          </div>
          {/* Questão 08 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">As aulas, provas e assuntos costumam te causar ansiedade?</p>
            <p>- {responseInput("input7")}</p>
          </div>
          {/* Questão 09 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Fora da escola quais fatores despertam a sua ansiedade?</p>
            <p>- {responseInput("input8")}</p>
          </div>
          {/* Questão 10 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Você possui dificuldades para relaxar mesmo em situações de lazer?</p>
            <p>- {responseInput("input9")}</p>
          </div>
          {/* Questão 11 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p"> Você pensa em várias coisas ao mesmo tempo e se sente frustrado ao não conseguir focar em uma só?</p>
            <p>- {responseInput("input10")}</p>
          </div>
          {/* Questão 12 */}
          <div className={`card ${styles.cardResponseForm}`}>
            <p className="title-p">Você já pesquisou para saber exatamente o que é a ansiedade e como trata-la?</p>
            <p>- {responseInput("input11")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ResponseForm;
