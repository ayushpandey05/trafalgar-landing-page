import { useRouter } from "next/router";
import { useState } from "react";
import { Text, Touch, View } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Avatar from "../Avatar";

const links = [
  { title: "Home", link: "/" },
  { title: "Find a doctor", link: "" },
  { title: "Apps", link: "" },
  { title: "Testimonials", link: "" },
  { title: "About us", link: "" },
];

const Header = () => {
  const router = useRouter();

  const { width } = useWindowDimensions();

  const isSmallScreen = width < 900;

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((old) => !old);
  };

  const renderLinks = () => {
    return (
      <View
        style={{
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
        }}
      >
        {links.map((item, index) => {
          const { title, link } = item;
          const isActive = link === router.pathname;
          return (
            <Text
              key={`header-${index}`}
              style={{
                width: 115,
                textAlign: "center",
                ...(isActive ? fonts.bold700 : fonts.regular400),
                color: isActive ? colors.darkV1 : colors.greyV1,
                fontSize: 18,
                lineHeight: 22,
                cursor: isActive ? "default" : "pointer",
              }}
            >
              {title}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={{
        marginTop: 24,
        marginBottom: 24,
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", ...(!isSmallScreen && {alignItems: "center"}) }}>
          <Avatar
            style={{ backgroundColor: colors.primary }}
            size={41}
            text="T"
            textStyle={{
              ...fonts.bold700,
              fontSize: 26,
              color: colors.light,
              lineHeight: 32,
            }}
          />
          <Text
            style={{
              lineHeight: 30,
              fontSize: 24,
              ...fonts.bold700,
              marginLeft: 12,
            }}
          >
            {"Trafalgar"}
          </Text>
        </View>
        <View>
          {isSmallScreen ? (
            <Touch style={{alignSelf: 'flex-end'}} onPress={toggleVisible}>
              <Text
                style={{
                  ...fonts.bold700,
                  fontSize: 24,
                  lineHeight: 40,
                  color: colors.primary,
                }}
              >
                {visible ? "-" : "+"}
              </Text>
            </Touch>
          ) : (
            renderLinks()
          )}
          {isSmallScreen && visible ? renderLinks() : void 0}
        </View>
        {/* {isSmallScreen ? (
          <Touch>
            <Text></Text>
          </Touch>
        ) : (
          renderLinks()
        )} */}

        {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          {links.map((item, index) => {
            const { title, link } = item;
            const isActive = link === router.pathname;
            return (
              <Text
                key={`header-${index}`}
                style={{
                  width: 115,
                  textAlign: "center",
                  ...(isActive ? fonts.bold700 : fonts.regular400),
                  color: isActive ? colors.darkV1 : colors.greyV1,
                  fontSize: 18,
                  lineHeight: 22,
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                {title}
              </Text>
            );
          })}
        </View> */}
      </View>
      {/* {isSmallScreen ? renderLinks() : void 0} */}
    </View>
  );
};

export default Header;
