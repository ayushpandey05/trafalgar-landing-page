import Image from "next/image";
import { CSSProperties, FC } from "react";
import { RightArrowImg } from "../../../assets/image";
import { Text, Touch, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { shadows } from "../../../theme/shadows";

interface Props {
  logo: StaticImageData;
  title: string;
  subTitle: string;
}

const titleStyle: CSSProperties = {
  fontSize: 21,
  lineHeight: 32,
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
  //   padding: 45,
  borderRadius: 20,
  backgroundColor: colors.light,
  ...shadows.shadowOne,
  flex: 1,
  overflow: "hidden",
};

const ArticelCard: FC<Props> = ({ logo, title, subTitle }) => {
  const { width } = useWindowDimensions();
  const numColumns = width < 600 ? 1 : width < 900 ? 2 : 3;
  return (
    <View style={{ width: `${100 / numColumns}%` }}>
      <View style={containerStyle}>
        <View>
          <Image src={logo} />
        </View>
        <View
          style={{
            paddingLeft: 33,
            paddingRight: 33,
            paddingBottom: 35,
            paddingTop: 24,
          }}
        >
          <Text style={titleStyle}>{title}</Text>
          <Text style={subTitleStyle}>{subTitle}</Text>
          <Touch style={{ flexDirection: "row", alignSelf: "flex-start", marginTop: 25 }}>
            <Text>{"Read More"}</Text>
            <View style={{ width: 14, height: 14, marginLeft: 14 }}>
              <Image src={RightArrowImg} />
            </View>
          </Touch>
        </View>
      </View>
    </View>
  );
};

export default ArticelCard;
