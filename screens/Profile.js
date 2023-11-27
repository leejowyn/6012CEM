import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import {
  MaterialIcons,
  Feather,
  EvilIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { COLORS, FONTS, SIZES, images, icons } from "../constants";
import { Image } from "react-native";
import { async } from "validate.js";

const Profile = ({ navigation }) => {
  const hardcodedAddress = "123 Main St, Jelutong, Malaysia";

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            height: 44,
            width: 44,
            borderRadius: 4,
            backgroundColor: COLORS.secondaryWhite,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={35}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{ ...FONTS.h4 }}>Profile</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Feather name="edit" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderProfile() {
    return (
      <View
        style={{
          alignItems: "center",
          marginVertical: 22,
        }}
      >
        <Image
          source={images.user3}
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
            borderRadius: SIZES.padding,
          }}
        />
        <Text style={{ ...FONTS.h2, marginTop: 24 }}>Hailey Thor</Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
          }}
        >
          <EvilIcons name="location" size={24} color={COLORS.primary} />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 8,
            }}
          >
            {hardcodedAddress}
          </Text>
        </View>
      </View>
    );
  }
  function renderButtons() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: COLORS.primary,
            width: 200,
            height: 50,
            borderRadius: SIZES.padding,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              marginLeft: 12,
            }}
          >
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderFeatures() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 22,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h1 }}>A+</Text>
          <Text style={{ ...FONTS.body3 }}>Blood Type</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h1 }}>05</Text>
          <Text style={{ ...FONTS.body3 }}>Donated</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h1 }}>02</Text>
          <Text style={{ ...FONTS.body3 }}>Requested</Text>
        </View>
      </View>
    );
  }

  function renderSettings() {
    return (
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
          }}
          onPress={() => navigation.navigate("Request")}
        >
          <MaterialCommunityIcons
            name="calendar-clock-outline"
            size={24}
            color={COLORS.primary}
          />
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Request for Donate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
          }}
          onPress={() => navigation.navigate("Checking")}
        >
          <MaterialCommunityIcons
            name="calendar-clock-outline"
            size={24}
            color={COLORS.primary}
          />
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Appointment for Checking
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
          }}
          onPress={() => console.log("Pressed")}
        >
          <Feather name="info" size={24} color={COLORS.primary} />
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Get help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="logout" size={24} color={COLORS.primary} />
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={{ marginHorizontal: 22 }}>
          {renderHeader()}
          {renderProfile()}
          {renderFeatures()}
          {renderSettings()}
          {renderButtons()}
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Profile;
