import Image from "next/image";
import { CSSProperties } from "react";
import { ElementImg, Logo1 } from "../../../assets/image";
import { Logo1SVG } from "../../../assets/svg";
import Button from "../../../components/Button";
import { Text, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";

const title = "Virtual healthcare for you";
const subTitle =
  "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";

const titleStyle: CSSProperties = {
  ...fonts.bold700,
  fontSize: 48,
  lineHeight: 56,
  color: colors.dark,
};

const subTitleStyle: CSSProperties = {
  ...fonts.light300,
  fontSize: 21,
  lineHeight: 32,
  color: colors.greyV1,
  marginTop: 25,
  marginBottom: 48
};

const ContainerOne = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: width < 900 ? "column-reverse" : "row",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <View style={{ flex: 0.4, justifyContent: "center" }}>
        <Text style={{ ...titleStyle }}>{title}</Text>
        <Text style={{ ...subTitleStyle }}>{subTitle}</Text>
        <Button label="Consult today" style={{ alignSelf: "flex-start" }} />
      </View>
      <View style={{ flex: 0.6 }}>
        <Image src={Logo1} />
        {/* <Logo1SVG style={{ alignSelf: "flex-end" }} /> */}
      </View>
      <View style={{ position: "absolute", left: 0, top: 0 }}>
        <Image src={ElementImg} />
      </View>
    </View>
  );
};

export default ContainerOne;
