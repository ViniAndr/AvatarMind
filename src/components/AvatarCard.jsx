import styles from "./AvatarCard.module.css";

import { Link } from "react-router-dom";

import { useDeleteDocument } from "../hooks/useDeleteDocument";

//PACOTE
import AvatarIcon from "./AvatarIcon";

const AvatarCard = ({ form }) => {
  const { deleteDocument } = useDeleteDocument("form");
  return (
    <div className={`card ${styles.cardAvatar}`}>
      <h2>
        {form.name} {form.lastName}
      </h2>
      <p>{form.email}</p>
      <div className={styles.avatar}>
        <AvatarIcon form={form} />
      </div>
      <Link to={`/responses/${form.id}`} className="btn">
        Mais detalhes
      </Link>
      <button onClick={() => deleteDocument(form.id)} className="btn btn-margin-top">
        Deletar
      </button>
    </div>
  );
};

export default AvatarCard;
