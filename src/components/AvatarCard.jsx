import styles from "./AvatarCard.module.css";

import { Link } from "react-router-dom";

//PACOTE
import Avatar from "avataaars2";

const AvatarCard = ({ form }) => {
  return (
    <div className={styles.cardAvatar}>
      <h2>
        {form.name} {form.lastName}
      </h2>
      <p>{form.email}</p>
      <Avatar
        className={styles.avatar}
        avatarStyle={form.avatarStyle}
        topType={form.topType}
        hairColor={form.hairColor}
        accessoriesType={form.accessoriesType}
        facialHairType={form.facialHairType}
        facialHairColor={form.facialHairColor}
        clotheType={form.clotheType}
        clotheColor={form.clotheColor}
        eyeType={form.eyeType}
        eyebrowType={form.eyebrowType}
        mouthType={form.mouthType}
        skinColor={form.skinColor}
      />
      <Link to={`/response/:${form.id}`} className="btn">
        Mais detalhes
      </Link>
    </div>
  );
};

export default AvatarCard;
