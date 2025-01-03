import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import "react-native-get-random-values";
import "react-native-webview";
import uuid from "uuid";

export default function Index() {
  const [selectTab, setSelectedTab] = useState("Recommended");
  return (
    <SafeAreaView className=" bg-gray-800">
      <ScrollView>
        <View className="flex-row items-center justify-center p-4">
          <TouchableOpacity
            onPress={() => setSelectedTab("Recommended")}
            className={` px-4 py-2  flex-row gap-2 items-center  ${
              selectTab === "Recommended" ? "bg-red-200" : "bg-gray-400"
            }`}
          >
            <Text>Recommended</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Collections")}
            className={`px-4 py-2  flex-row gap-2 items-center ${
              selectTab === "Collections" ? "bg-red-200" : "bg-gray-400"
            }`}
          >
            <Ionicons name="bookmark" size={14} color="white" />
            <Text>Collections</Text>
          </TouchableOpacity>
        </View>
        {/* explore section */}
        <Explore />
      </ScrollView>
    </SafeAreaView>
  );
}
