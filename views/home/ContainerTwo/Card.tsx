import Image from "next/image";
import { CSSProperties, FC } from "react";
import { Text, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { shadows } from "../../../theme/shadows";

const titleStyle: CSSProperties = {
  fontSize: 24,
  lineHeight: 56,
  ...fonts.bold700,
  color: colors.dark,
  marginTop: 22,
};

const subTitleStyle: CSSProperties = {
  fontSize: 16,
  lineHeight: 28,
  ...fonts.light300,
  color: colors.greyV1,
  marginTop: 1,
};

const containerStyle: CSSProperties = {
  margin: 17,
  padding: 45,
  borderRadius: 20,
  backgroundColor: colors.light,
  ...shadows.shadowOne,
  flex: 1,
};

interface Props {
  logo: StaticImageData;
  title: string;
  subTitle: string;
}

const Card: FC<Props> = ({ logo, title, subTitle }) => {
  const { width } = useWindowDimensions();
  const numColumns = width<600 ? 1 :  width < 900 ? 2 : 3;

  return (
    <View style={{ width: `${100 / numColumns}%` }}>
      <View style={containerStyle}>
        <View style={{ width: 90, height: 90 }}>
          <Image src={logo} />
        </View>
        <Text style={titleStyle}>{title}</Text>
        <Text style={subTitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;
