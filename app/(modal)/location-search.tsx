import React, { useState } from "react";
import { useNavigation } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

const LocationSearch = () => {
  const navigation = useNavigation();
  const initialLocation = {
    latitude: 28.584669,
    longitude: 77.352005,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };
  const [location, setLocation] = useState(initialLocation);
  const handleLocationChange = (data: any, details: any) => {
    const point = details?.geometry?.location;
    console.log(point);
    if (!point) return;
    if (point) {
      setLocation({
        ...location,
        latitude: point.latitude,
        longitude: point.longitude,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Google Places Autocomplete */}
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={handleLocationChange}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
            language: "en",
          }}
          renderLeftButton={() => (
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              className="absolute left-6 top-2 z-10"
            />
          )}
          styles={styles.googlePlaces}
        />
      </View>

      {/* MapView */}
      <MapView
        style={styles.map}
        showsUserLocation={true}
        region={location}
        userLocationUpdateInterval={1000}
        onRegionChangeComplete={(newRegion) => setLocation(newRegion)}
      />

      {/* Confirm Location Button */}
      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",

    width: "100%",
    zIndex: 1,
    padding: 10,
    backgroundColor: "white",

    elevation: 5,
  },
  googlePlaces: {
    textInputContainer: {
      width: "100%",
      backgroundColor: "#fff",
      borderBottomWidth: 0,
      paddingHorizontal: 10,
    },
    textInput: {
      height: 40,
      color: "black",
      borderColor: "#ddd",
      backgroundColor: "lightgrey",
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 40,
      fontSize: 16,
    },
    placeholderText: {
      color: "black",
    },
    predefinedPlacesDescription: {
      color: "#1faadb",
    },
    description: {
      fontSize: 16,
      color: "#000",
    },
    row: {
      padding: 10,
      height: 44,
      flexDirection: "row",
      alignItems: "center",
    },
    separator: {
      height: 0.5,
      backgroundColor: "#ddd",
    },
  },
  map: {
    flex: 1,
    marginTop: 60, // Add marginTop to avoid overlapping with the search bar
  },
  confirmButtonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    width: "80%",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
