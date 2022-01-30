import { Page404SVG } from "../assets/svg";
import { View } from "../easy-ui/core-components";

const PageNotFound = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        // backgroundColor: colors.background,
      }}
    >
      <Page404SVG width="50%" height="50%" fill="black" />
    </View>
  );
};

export default PageNotFound;
