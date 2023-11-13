import Avatar from "avataaars2";

const AvatarCard = ({ form }) => {
  return (
    <Avatar
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
  );
};

export default AvatarCard;
