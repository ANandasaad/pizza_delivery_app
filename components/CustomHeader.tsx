import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SearchBar from "./SearchBar";

const CustomHeader = () => {
  const logo = require("../assets/images/logo.png");
  const profile = require("../assets/icons/profile.png");

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView className="">
      <BottomSheet ref={bottomSheetRef} />
      <View className="bg-gray-50 h-20 flex-row justify-between items-center">
        <TouchableOpacity onPress={openModal}>
          <Image
            source={logo}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1" onPress={openModal}>
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
