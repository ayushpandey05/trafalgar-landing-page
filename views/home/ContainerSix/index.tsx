import { CSSProperties } from "react";
import Button from "../../../components/Button";
import { Text, View } from "../../../easy-ui/core-components";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import ArticelCard from "./ArticelCard";
import { articleData } from "./articelData";

const title = "Check out our latest article";

const dividerStyle: CSSProperties = {
  width: 56,
  height: 2,
  borderRadius: 1,
  backgroundColor: colors.dark,
  marginTop: 26,
  marginBottom: 90,
  alignSelf: "center",
};

const titleStyle: CSSProperties = {
  textAlign: "center",
  ...fonts.bold700,
  fontSize: 36,
  lineHeight: 56,
  color: colors.dark,
};

const ContainerSix = () => {
  return (
    <View style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 200 }}>
      <Text style={titleStyle}>{title}</Text>
      <View style={dividerStyle} />
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {articleData.map((item, index) => {
          return <ArticelCard key={`articel-${index}`} {...item} />;
        })}
      </View>
      <Button
        label="View all"
        style={{ alignSelf: "center", marginTop: 60 }}
        outline
      />
    </View>
  );
};

export default ContainerSix;
