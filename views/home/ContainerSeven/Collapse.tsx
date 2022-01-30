import { ReactNode, useState, FC, CSSProperties } from "react";
import { Text, Touch, View } from "../../../easy-ui/core-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";

interface Props {
  title: string;
  children: ReactNode;
}

const titleStyle: CSSProperties = {
  ...fonts.bold700,
  fontSize: 20,
  lineHeight: 60,
  color: colors.light,
};

const Collapse: FC<Props> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowDimensions();
  const isCollapse = width < 900;

  const toggleVisible = () => {
    isCollapse && setVisible((old) => !old);
  };

  return (
    <View>
      <Touch
        onPress={toggleVisible}
        activeOpacity={isCollapse ? 0.3 : 1}
        style={{
          flexDirection: "row",
          cursor: isCollapse ? "pointer" : "default",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={titleStyle}>{title}</Text>
        </View>
        {isCollapse ? (
          <Text style={{ ...titleStyle, marginLeft: 14 }}>
            {visible ? "-" : "+"}
          </Text>
        ) : (
          void 0
        )}
      </Touch>
      {!isCollapse || (isCollapse && visible) ? children : void 0}
      {/* {isCollapse
        ? visible
          ? children || void 0
          : void 0
        : children || void 0} */}
    </View>
  );
};

export default Collapse;
