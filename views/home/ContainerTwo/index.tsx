import Image from "next/image";
import { CSSProperties } from "react";
import { Element2Img, VectorImg } from "../../../assets/image";
import Button from "../../../components/Button";
import { Text, View } from "../../../easy-ui/core-components";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Card from "./Card";
import { servicesData } from "./servicesData";

const title = "Our services";
const subTitle =
  "We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health";

const titleStyle: CSSProperties = {
  ...fonts.bold700,
  fontSize: 36,
  lineHeight: 56,
  color: colors.dark,
  textAlign: "center",
};
const subTitleStyle: CSSProperties = {
  ...fonts.light300,
  fontSize: 18,
  lineHeight: 30,
  color: colors.greyV1,
  textAlign: "center",
};

const dividerStyle: CSSProperties = {
  width: 56,
  height: 2,
  borderRadius: 1,
  backgroundColor: colors.dark,
  alignSelf: "center",
  marginTop: 26,
  marginBottom: 33,
};

const ContainerTwo = () => {
  return (
    <View style={{ marginTop: 200, marginLeft: "10%", marginRight: "10%" }}>
      <Text style={titleStyle}>{title}</Text>
      <View style={dividerStyle} />
      <Text style={subTitleStyle}>{subTitle}</Text>
      <View>
        <View style={{ position: "absolute", left: 0 }}>
          <Image src={VectorImg} />
        </View>
        <View style={{ position: "absolute", right: 0, top: 150 }}>
          <Image src={Element2Img} />
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {servicesData.map((item, index) => {
            return <Card key={`service-${index}`} {...item} />;
          })}
        </View>
        <View style={{ alignItems: "center", marginTop: 72 }}>
          <Button outline label="Learn more" />
        </View>
      </View>
    </View>
  );
};

export default ContainerTwo;
