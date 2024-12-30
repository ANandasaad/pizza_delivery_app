import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [isVegMode, setIsVegMode] = useState(false);
  const [isModeVisibility, setIsModeVisibility] = useState(false);
  const toggleMode = () => {
    console.log(isVegMode);
    setIsVegMode(!isVegMode);
    if (isVegMode) {
      setIsModeVisibility(true);
    }
  };
  const closeModal = () => {
    setIsModeVisibility(false);
  };
  return (
    <View className="h-20 bg-gray-50 flex-row justify-between items-center px-1">
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
      <View className="">
        <View className="scale-75 ">
          <Switch
            value={isVegMode}
            onValueChange={toggleMode}
            thumbColor={isVegMode ? "green" : "gray"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
          <Text className="text-gray-700 font-semibold text-sm">Veg Mode</Text>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModeVisibility}
          onRequestClose={closeModal}
        >
          <View className="flex-1 justify-center items-center">
            <View className="bg-gray-900 p-4 rounded-lg">
              <Text className="text-white text-lg font-bold mb-4">
                Which is your veg food preference?
              </Text>
              <TouchableOpacity
                className="flex-row items-center mb-2"
                onPress={closeModal}
              >
                <Ionicons name="radio-button-on" size={20} color={"green"} />
                <Text className="text-white ml-2">
                  Veg dishes from all restaurants
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center mb-4"
                onPress={closeModal}
              >
                <Ionicons name="radio-button-off" size={20} color={"white"} />
                <Text className="text-white ml-2">
                  Veg dishes from Pure Veg restaurants
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-green-600 p-3 rounded-lg mt-4"
                onPress={closeModal}
              >
                <Text className="text-white text-center font-bold">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SearchBar;
