import { Text, View } from "react-native";
import "react-native-get-random-values";
import "react-native-webview";
import uuid from "uuid";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
