import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import { Link } from "expo-router";

const SearchBar = () => (
  <View className="h-20 bg-gray-50 flex-row justify-between items-center px-3">
    <View className="w-96 relative">
      <Ionicons
        name="search"
        size={20}
        color={"gray"}
        className="absolute top-2 right-1 z-10"
      />
      <TextInput
        placeholder="Search"
        className="bg-gray-100 py-3 px-3 rounded-sm "
      />
    </View>
    <Link href={"/"}>
      <TouchableOpacity>
        <Ionicons name="options-outline" size={20} color={"red"} />
      </TouchableOpacity>
    </Link>
  </View>
);
const CustomHeader = () => {
  const logo = require("../assets/images/logo.png");
  const profile = require("../assets/icons/profile.png");
  return (
    <SafeAreaView className="">
      <View className="bg-gray-50 h-20 flex-row justify-between items-center">
        <TouchableOpacity>
          <Image
            source={logo}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1">
          <Text className="text-xl text-gray-500">Delivery - Now</Text>
          <View className="flex-row">
            <Text className="font-bold">Noida Sector 104</Text>
            <Ionicons
              className="px-2"
              name="chevron-down"
              size={20}
              color={"gray"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={profile} resizeMode="contain" className="h-5" />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;
