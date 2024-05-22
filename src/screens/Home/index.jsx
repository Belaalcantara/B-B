import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="BoasVindas1" title="Boas Vindas1" />

      <TouchButton route="BoasVindas2" title="Boas Vindas2" />

      <TouchButton route="BoasVindas3" title="Boas Vindas3" />

    </View>
  );
}