import { StyleSheet, ScrollView } from "react-native";

import { OutbrainWidget } from "outbrain-react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const handler = {
  onRecClick: (url) => {
    console.log(url);
  },
  onOrganicRecClick: (url) => {
    // in app navigation
    console.log(url);
  },
  onHeightChanged: (_newHeight) => {
    // do something
  },
};

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Link href="" push style={{ padding: 50 }}>
        <ThemedText style={{ fontSize: 30 }}>next article</ThemedText>
      </Link>
      <OutbrainWidget
        widgetId="MB_2"
        widgetIndex={0}
        articleUrl="https://www.promiflash.de/news/2024/10/10/hugh-grant-verraet-neuer-bridget-jones-film-wird-traurig.html"
        partnerKey="DEPRO8GQE8CENLDJ8JHE61K83"
        handler={handler}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
