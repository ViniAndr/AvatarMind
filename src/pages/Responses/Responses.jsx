//HOOKS
import { useFetchDocuments } from "../../hooks/useFetchDocuments.jsx";
//MODULO
import AvatarCard from "../../components/AvatarCard.jsx";
//CSS
import styles from "./Responses.module.css";

const Responses = () => {
  // useFetchDocuments("form") se refere a pegar os dados da coleção(tabela) form.
  const { documents: responses, loading } = useFetchDocuments("form");

  const countResponses = (key, value) => {
    let number = 0;
    if (responses) {
      responses.map((response) => {
        if (response[key] == value) {
          number++;
        }
      });
    }
    return number;
  };

  return (
    <div className="container">
      <h1 className="title-h1">Resposta dos formularios</h1>
      {loading && <p>Carregando ...</p>}
      <div className={styles.generalStatistics}>
        {/* Estatistica Geral dos Forms */}
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você tem ideia do que se trata uma identidade?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input0", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input0", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Se sente satisfeito com a sua identidade neste momento?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input1", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input1", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Seu núcleo familiar exerce influência na construção dessa identidade (suas escolhas)?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input2", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input2", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você se sente confortável com a imagem que reflete para os outros?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input3", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input3", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você se sente amado/aceito por ser quem você é, e por ter assumido essa identidade?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input4", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input4", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você possui dificuldades para relaxar mesmo em situações de lazer?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input9", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input9", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você pensa em várias coisas ao mesmo tempo e se sente frustrado ao não conseguir focar em uma só?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input10", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input10", false)}
          </p>
        </div>
        <div className={`card ${styles.cardResponses}`}>
          <p className="title-p">Você já pesquisou para saber exatamente o que é a ansiedade e como trata-la?</p>
          <p>
            <span className="title-p">SIM: </span> {countResponses("input11", true)}
          </p>
          <p>
            <span className="title-p">NÃO:</span> {countResponses("input11", false)}
          </p>
        </div>
      </div>
      <h1 className="title-h1">Resultado Individualmente</h1>
      <div className={styles.cardAvatarGrup}>{responses && responses.map((response) => <AvatarCard key={response.id} form={response} />)}</div>
    </div>
  );
};

export default Responses;
