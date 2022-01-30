import Image from "next/image";
import { CSSProperties, useState } from "react";
import { LeftArrowImg, RightArrowImg } from "../../../assets/image";
import Avatar from "../../../components/Avatar";
import { Text, Touch, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { carouselData } from "./carouselData";

const dividerStyle: CSSProperties = {
  backgroundColor: colors.light,
  width: 56,
  height: 2,
  borderRadius: 1,
  alignSelf: "center",
  marginTop: 25,
  marginBottom: 30,
};

const titleStyle: CSSProperties = {
  ...fonts.bold700,
  fontSize: 36,
  lineHeight: 48,
  color: colors.light,
  textAlign: "center",
  //   marginTop: 64,
};

const ContainerFive = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const carouselItem = carouselData[itemIndex];
  const { width } = useWindowDimensions();

  return (
    <View style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 200 }}>
      <View
        style={{
          borderRadius: 24,
          background:
            "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
          paddingTop: 64,
          paddingBottom: 80,
        }}
      >
        <Text style={titleStyle}>{carouselItem.title}</Text>
        <View style={dividerStyle} />
        <View
          style={{
            flexDirection: width < 800 ? "column" : "row",
            justifyContent: "space-around",
            ...(width < 800 && {padding: 20})
          }}
        >
          <View
            style={{ flex: 0.4, flexDirection:  width <550 ? 'column' : "row", alignItems: "center" }}
          >
            <Avatar size={133} image={carouselItem.logo} />
            <View style={{ marginLeft: 29 }}>
              <Text
                style={{
                  ...fonts.bold700,
                  fontSize: 22,
                  lineHeight: 48,
                  color: colors.light,
                }}
              >
                {carouselItem.name}
              </Text>
              <Text
                style={{
                  ...fonts.regular400,
                  fontSize: 18,
                  lineHeight: 48,
                  color: colors.light,
                }}
              >
                {carouselItem.jobTitle}
              </Text>
            </View>
          </View>

          <View style={{ flex: 0.4 }}>
            <Text
              style={{
                ...fonts.regular400,
                fontSize: 19,
                lineHeight: 30,
                color: colors.light,
              }}
            >
              {carouselItem.description}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Touch
            onPress={() => {
              if (itemIndex > 0) {
                setItemIndex(itemIndex - 1);
              }
            }}
            activeOpacity={0.3}
            style={{ opacity: itemIndex === 0 ? 0.3 : 1 }}
          >
            <Image src={LeftArrowImg} />
          </Touch>
          <View
            style={{
              marginLeft: 90,
              marginRight: 90,
              flexDirection: "row",
              alignItems: "center",
              gap: 18,
            }}
          >
            {carouselData.map((item, index) => {
              const isActive = itemIndex === index;
              return (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: colors.primary,
                    opacity: isActive ? 1 : 0.3,
                  }}
                />
              );
            })}
          </View>
          <Touch
            onPress={() => {
              if (itemIndex < carouselData.length - 1) {
                setItemIndex(itemIndex + 1);
              }
            }}
            activeOpacity={0.3}
            style={{ opacity: itemIndex === carouselData.length - 1 ? 0.3 : 1 }}
          >
            <Image src={RightArrowImg} />
          </Touch>
        </View>
      </View>
    </View>
  );
};

export default ContainerFive;
