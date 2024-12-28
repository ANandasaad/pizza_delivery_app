import { Stack } from "expo-router";
import "../global.css";
import CustomHeader from "@/components/CustomHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader />,
        }}
      />
    </Stack>
  );
}
