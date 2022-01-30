import "../styles/globals.css";
import type { AppProps } from "next/app";
import { View } from "../easy-ui/core-components";
import Fonts from "../components/Fonts";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Fonts />
      <Header />
      <Component {...pageProps} />
    </View>
  );
}

export default MyApp;
