import { ScrollView } from "../../easy-ui/core-components";
import ContainerFive from "./ContainerFive";
import ContainerFour from "./ContainerFour";
import ContainerOne from "./ContainerOne";
import ContainerSeven from "./ContainerSeven";
import ContainerSix from "./ContainerSix";
import ContainerThree from "./ContainerThree";
import ContainerTwo from "./ContainerTwo";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, overflow: "hidden" }}>
      <ContainerOne />
      <ContainerTwo />
      <ContainerThree />
      <ContainerFour />
      <ContainerFive />
      <ContainerSix />
      <ContainerSeven />
    </ScrollView>
  );
};

export default Home;
