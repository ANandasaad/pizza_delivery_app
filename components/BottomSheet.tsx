import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useMemo, forwardRef, useCallback, useState } from "react";
import * as Location from "expo-location";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/app-example/constants/Colors";
export type Ref = BottomSheetModal;

const addresses = [
  {
    id: 1,
    type: "Home",
    distance: "0 m",
    address: "Oto royal win, gali no 10, Hazipur, Sector 104, Noida",
    phone: "+91-9915363698",
    icons: "home",
  },
  {
    id: 2,
    type: "Home",
    distance: "2.4 km",
    address: "Floor 3, room 303, Super townhouse 204, Sector 49, Noida",
    phone: "+91-9915363698",
    icons: "home",
  },
  {
    id: 3,
    type: "Hotel",
    distance: "3 km",
    address:
      "Room 108, Culture hotel, H Block, Chhalera Bangar, Sector 44, Noida",
    phone: "+91-9915363698",
    icons: "business-outline",
  },
];
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  const snapPoints = useMemo(() => ["85%", "90%"], []);
  const { dismiss } = useBottomSheetModal();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const renderAddressItem = ({ item }: any) => (
    <View className="bg-gray-900 rounded-lg p-4 mb-2 flex-row items-center gap-5 w-full  ">
      <View className="w-14">
        <Ionicons name={item.icons} size={20} color="white" className="px-2" />
        <Text className="text-gray-400 py-2 px-2">{item.distance}</Text>
      </View>

      <View className="pr-16 w-full">
        <Text className="text-white font-bold py-2">{item.type}</Text>
        <Text className="text-white  py-1">{item.address}</Text>
        <Text className="text-gray-400 py-1">Phone number: {item.phone}</Text>
      </View>
    </View>
  );
  const fetchCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location permission required");
        return;
      }

      // get current location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      //fetch location google api

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
      );

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setCurrentLocation(data.results[0].formatted_address);
      } else {
        Alert.alert("Location not found");
      }
    } catch (error) {
      Alert.alert("Error fetching location");
    }
  };
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{
        borderRadius: 0,
        backgroundColor: "#1F2937",
      }}
    >
      <BottomSheetView className="flex-1 px-2 ">
        <View className="flex-row items-center mb-4">
          <Ionicons
            name="chevron-down-outline"
            size={30}
            color="white"
            className="px-2"
            onPress={() => dismiss()}
          />

          <Text className="text-2xl font-bold text-white">
            Select a location
          </Text>
        </View>

        {/* searchBar */}

        <View className="relative">
          <Ionicons
            name="search"
            size={20}
            color="white"
            className="absolute left-0 top-0 z-10  py-1 px-1"
          />
          <TextInput
            placeholder="Search for area, street name"
            className="bg-gray-500 text-white px-8 py-2 rounded-md mb-4"
            placeholderTextColor={"white"}
          />
        </View>
        <View className="mb-4 bg-gray-900 rounded-lg">
          <TouchableOpacity className=" p-4  flex-row items-center border-b border-gray-600">
            <Ionicons
              name="add-outline"
              size={20}
              color="red"
              className="px-2"
            />
            <Text className="text-red-500 font-bold">Add new address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" p-4  flex-row items-center "
            onPress={fetchCurrentLocation}
          >
            <Ionicons
              name="locate-outline"
              size={20}
              color="red"
              className="px-2"
            />
            <View className="flex-1">
              <Text className="text-red-500 font-bold">
                Use your current location
              </Text>
              <Text className="text-gray-400 text-xs">{currentLocation}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="justify-center items-center">
          <Text className="text-gray-500 mb-2">
            -------SAVED ADDRESSES-------
          </Text>
        </View>

        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAddressItem}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheet;
