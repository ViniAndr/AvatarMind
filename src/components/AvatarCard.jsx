import styles from "./AvatarCard.module.css";

import { Link } from "react-router-dom";

//PACOTE
import AvatarIcon from "./AvatarIcon";

const AvatarCard = ({ form }) => {
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
    </div>
  );
};

export default AvatarCard;
