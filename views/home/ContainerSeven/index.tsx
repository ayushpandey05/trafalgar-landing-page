import Avatar from "../../../components/Avatar";
import { Text, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Collapse from "./Collapse";
import { companyData, helpData, regionData } from "./data";

const title =
  "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";

const rightsTitle = "©Trafalgar PTY LTD 2020. All rights reserved";

const ContainerSeven = () => {
  const renderItem = (name: string) => {
    return (
      <Text
        style={{
          ...fonts.light300,
          fontSize: 18,
          lineHeight: 38,
          color: colors.light,
        }}
      >
        {name}
      </Text>
    );
  };

  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        background: `linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)`,
        marginTop: 200,
        paddingLeft: "10%",
        paddingRight: "10%",
        flexDirection: width < 700 ? "column" : "row",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <View style={{ flex: 0.3 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            size={41}
            style={{ backgroundColor: colors.light }}
            text="T"
            textStyle={{
              ...fonts.bold700,
              fontSize: 26,
              lineHeight: 32,
              color: colors.primary2,
            }}
          />
          <Text
            style={{
              ...fonts.bold700,
              fontSize: 24,
              lineHeight: 30,
              color: colors.light,
              marginLeft: 12,
            }}
          >
            {"Trafalgar"}
          </Text>
        </View>
        <Text
          style={{
            ...fonts.light300,
            fontSize: 18,
            lineHeight: 28,
            color: colors.light,
            marginTop: 17,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginTop: 31,
            ...fonts.light300,
            fontSize: 16,
            lineHeight: 28,
            color: colors.light,
          }}
        >
          {rightsTitle}
        </Text>
      </View>
      <View
        style={{
          flex: 0.7,
          ...(width < 900
            ? width >= 700 && { paddingLeft: "10%", paddingRight: "10%" }
            : { justifyContent: "space-around" }),

          flexDirection: width < 900 ? "column" : "row",
        }}
      >
        <Collapse title="Company">{companyData.map(renderItem)}</Collapse>
        <Collapse title="Region">{regionData.map(renderItem)}</Collapse>
        <Collapse title="Help">{helpData.map(renderItem)}</Collapse>
      </View>
    </View>
  );
};

export default ContainerSeven;
