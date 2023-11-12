import { useFetchDocuments } from "../../hooks/useFetchDocuments.jsx";
import AvatarCard from "../../components/AvatarCard.jsx";
import styles from "./Responses.module.css";

const Responses = () => {
  const { documents: responses, loading } = useFetchDocuments("form");
  return (
    <div className="container">
      <h1>Resposta dos formularios</h1>
      {loading && <p>Carregando ...</p>}
      <div className={styles.cardAvatarGrup}>{responses && responses.map((response) => <AvatarCard key={response.id} form={response} />)}</div>
    </div>
  );
};

export default Responses;
