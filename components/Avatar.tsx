import Image from "next/image";
import { CSSProperties, FC } from "react";
import { Text, View } from "../easy-ui/core-components";

interface AvatarProps {
  size?: number;
  text?: string;
  textStyle?: CSSProperties;
  style?: CSSProperties;
  image?: StaticImageData;
}

const Avatar: FC<AvatarProps> = ({
  size = 24,
  text = "",
  textStyle,
  style,
  image,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {image ? (
        <Image src={image} />
      ) : (
        <Text style={{ ...textStyle }}>{text}</Text>
      )}
    </View>
  );
};

export default Avatar;
