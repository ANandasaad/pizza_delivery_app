import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Explore = () => {
  const exploreItems = [
    { id: 1, title: "Offers", icon: "rocket" },
    { id: 2, title: "Plan a party", icon: "people" },
    { id: 3, title: "Food on train", icon: "train" },
    { id: 4, title: "Gift cards", icon: "gift" },
    { id: 5, title: "Everyday", icon: "beer" },
  ];

  return (
    <View className="p-4">
      <Text className="text-white font-bold text-xl mb-4 text-center">
        EXPLORE
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        {exploreItems.map((exploreItem) => (
          <View
            key={exploreItem.id}
            className="items-center bg-gray-900 p-4 rounded-lg w-24"
          >
            <Ionicons name={exploreItem.icon as any} size={24} color="white" />
            <Text className="text-white text-sm mt-2 text-center">
              {exploreItem.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Explore;
