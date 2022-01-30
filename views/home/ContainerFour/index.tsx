import Image from "next/image";
import { CSSProperties } from "react";
import { ElementImg, Logo3 } from "../../../assets/image";
import Button from "../../../components/Button";
import { Text, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";

const title = "Download our mobile apps";
const subTitle = `Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely`;

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
  marginBottom: 48,
};

const dividerStyle: CSSProperties = {
  height: 2,
  borderRadius: 1,
  width: 56,
  backgroundColor: colors.dark,
  marginTop: 30,
  marginBottom: 31,
};

const ContainerFour = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: width < 900 ? "column-reverse" : "row",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: 200,
      }}
    >
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Text style={{ ...titleStyle }}>{title}</Text>
        <View style={dividerStyle} />
        <Text style={{ ...subTitleStyle }}>{subTitle}</Text>
        <Button label="Download" outline style={{ alignSelf: "flex-start" }} />
      </View>
      <View style={{ flex: 0.5 }}>
        <Image src={Logo3} />
      </View>
      <View style={{ position: "absolute", left: 0, top: 0 }}>
        <Image src={ElementImg} />
      </View>
    </View>
  );
};

export default ContainerFour;
