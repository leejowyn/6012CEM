import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Slideshow from "react-native-image-slider-show";
import { COLORS, SIZES, FONTS } from "../constants";
import { categories } from "../constants/data";
import DonationCard from "../components/DonationCard";
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const [position, setPosition] = useState(0);
  const [dataSource, setDataSource] = useState([
    {
      url: "https://i.ibb.co/YXKSm0q/16262070-tp227-facebookeventcover-06.jpg",
    },
    {
      url: "https://i.ibb.co/vhBbSQf/16262056-tp227-facebookeventcover-04.jpg",
    },
  ]);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition === dataSource.length - 1 ? 0 : prevPosition + 1
      );
    }, 1000);

    return () => clearInterval(toggle);
  }, [dataSource.length]);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 12,
        }}
      >
        <TouchableOpacity 
          onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="view-dashboard"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View>
          <View
            style={{
              height: 6,
              width: 6,
              backgroundColor: COLORS.primary,
              borderRadius: 3,
              position: "absolute",
              right: 5,
              top: 5,
            }}
          ></View>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Notification")}>
            <Ionicons
              name="notifications-outline"
              size={38}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderSliderBanner() {
    return (
      <View
        style={{
          height: 200,
          width: "100%",
        }}
      >
        <Slideshow position={position} dataSource={dataSource} />
      </View>
    );
  }

  function renderFeatures() {
    const navigation = useNavigation();
  
    const handleCategoryPress = (screen) => {
      navigation.navigate(screen);
    };
  
    return (
      <View
        style={{
          marginVertical: SIZES.padding,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: 120,
              width: 110,
              borderColor: COLORS.secondaryWhite,
              borderWidth: 2,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 22,
            }}
            onPress={() => handleCategoryPress(category.screen)}
          >
            <Image
              source={category.icon}
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
                marginVertical: 12,
              }}
            />
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.secondaryBlack,
              }}
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  function renderDonationCard() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: "bold",
            color: COLORS.secondaryBlack,
          }}
        >
          Donation request
        </Text>
        <DonationCard
          name="Amir Hamza"
          location="Hertford Dritish Hospital"
          bloodType="B+"
          postedDate="5 min"
          onPress={() => navigation.navigate("AcceptRequest")}
        />
        <DonationCard
          name="Amir Hamza"
          location="Hertford Dritish Hospital"
          bloodType="B+"
          postedDate="5 min"
          onPress={() => navigation.navigate("AcceptRequest")}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ marginHorizontal: 22 }}>
          {renderHeader()}
          {renderSliderBanner()}
          {renderFeatures()}
          {renderDonationCard()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
