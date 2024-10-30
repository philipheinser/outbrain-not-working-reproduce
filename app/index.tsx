import { StyleSheet, ScrollView } from "react-native";

import { OutbrainWidget } from "outbrain-react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { FlatList } from "react-native-gesture-handler";

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
    <FlatList
      style={{ flex: 1 }}
      data={[1, 2, 3, 4]}
      renderItem={({ index }) => {
        if (index === 3)
          return (
            <OutbrainWidget
              initialNumToRender={3}
              widgetId="MB_2"
              widgetIndex={0}
              articleUrl="https://www.promiflash.de/news/2024/10/10/hugh-grant-verraet-neuer-bridget-jones-film-wird-traurig.html"
              partnerKey="DEPRO8GQE8CENLDJ8JHE61K83"
              handler={handler}
            />
          );

        return (
          <>
            <Link href="" push style={{ padding: 50 }}>
              <ThemedText style={{ fontSize: 30 }}>next article</ThemedText>
            </Link>
            <ThemedText>{longText}</ThemedText>
          </>
        );
      }}
    ></FlatList>
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

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, dui ac porttitor placerat, leo ligula commodo lorem, eu tempor nisi felis id nisi. Nam non arcu ac ipsum fermentum aliquet in at metus. Nam accumsan erat nulla. Etiam pulvinar turpis non dapibus finibus. Integer in lectus eget erat sodales suscipit eu at mi. Morbi eget mattis lectus. In vulputate enim vel risus blandit lobortis.

Maecenas eu lacus vitae dolor luctus sagittis sed et dolor. Suspendisse malesuada id sem in aliquam. Sed venenatis pharetra lorem. Vestibulum bibendum arcu eget orci rutrum molestie. Suspendisse nec pharetra diam. Praesent commodo lacus ac velit tempus, nec pretium libero aliquet. Integer ac erat bibendum, bibendum tortor non, vestibulum nisl. Aenean aliquet libero in ligula dignissim varius. Quisque ac magna sed ligula pharetra ultricies. Nam lacus erat, pretium vel sapien sed, consequat eleifend urna. Nulla facilisi.

Ut sit amet commodo mi. Mauris neque dolor, interdum ut pretium vitae, feugiat sit amet ex. Maecenas et eros quis eros facilisis commodo ultricies ut est. Mauris et rutrum nibh. Aenean malesuada, sapien sed vestibulum vehicula, lorem arcu consequat mauris, in mattis enim augue vel ipsum. Etiam mattis, turpis condimentum elementum ultrices, dolor ipsum egestas neque, quis fringilla orci tortor ullamcorper eros. Sed id nisl egestas, ultricies neque non, pellentesque massa. Phasellus ut semper lectus. Sed pellentesque faucibus dui, et sodales lectus facilisis et. Integer sagittis massa justo, dictum tincidunt tellus dignissim eu. Proin vitae dolor mi. Nullam tincidunt convallis diam, id imperdiet lectus facilisis sit amet. Pellentesque ut mollis velit. Phasellus vestibulum risus in nibh suscipit feugiat. Donec consequat arcu quis enim ultricies, eu efficitur felis viverra. Nulla bibendum orci sit amet mauris eleifend pretium.
`;
