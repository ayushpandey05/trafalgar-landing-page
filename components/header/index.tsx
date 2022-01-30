import { useRouter } from "next/router";
import { Text, View } from "../../easy-ui/core-components";
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

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginBottom: 24,
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
    </View>
  );
};

export default Header;
