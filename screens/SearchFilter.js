import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import { COLORS, SIZES, FONTS, images, icons } from "../constants";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Button from "../components/Button";

const SearchFilter = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (data) => {
    setSearch(data);
    const filteredData = donors.filter((donor) =>
      donor.location.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredDonors(filteredData);
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 50,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("BottomTabNavigation")}
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
        <Text style={{ ...FONTS.h4 }}>Search</Text>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.secondaryWhite,
          height: 48,
          marginVertical: 22,
          paddingHorizontal: 22,
          borderRadius: 4,
        }}
      >
        <Ionicons name="ios-search-outline" size={24} color={COLORS.black} />
        <TextInput
          style={{
            width: SIZES.width - 144,
            height: "100%",
            marginHorizontal: 12,
          }}
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchFilter")}
          style={{
            height: 48,
            width: 48,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
          }}
        >
          <MaterialCommunityIcons
            name="swap-vertical"
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderFiltersText() {
    return (
      <Text
        style={{
          ...FONTS.h4,
          textAlign: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Filters
      </Text>
    );
  }

  function renderList() {
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
            justifyContent: "space-between",
          }}
          onPress={() => console.log("Pressed")}
        >
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Blood Type:
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={35}
            color={COLORS.secondaryBlack}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("A+ Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              A+
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("A- Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              A-
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("B+ Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              B+
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("B- Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              B-
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("O Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              O
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("AB+ Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              AB+
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.log("AB- Pressed")}
          >
            <Text style={{ ...FONTS.body3, marginLeft: 24, color: "grey" }}>
              AB-
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
            justifyContent: "space-between",
          }}
          onPress={() => console.log("Pressed")}
        >
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Location
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={COLORS.secondaryBlack}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
            justifyContent: "space-between",
          }}
          onPress={() => console.log("Pressed")}
        >
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Blood Bank
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={COLORS.secondaryBlack}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
            justifyContent: "space-between",
          }}
          onPress={() => console.log("Pressed")}
        >
          <Text
            style={{
              ...FONTS.body3,
              marginLeft: 24,
            }}
          >
            Donors
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={COLORS.secondaryBlack}
          />
        </TouchableOpacity>

        <Button
          title="Finish"
          filled
          onPress={() => navigation.navigate("BottomTabNavigation")}
          style={{
            width: "40%",
            alignSelf: "center",
            marginTop: 20
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={{ marginHorizontal: 22, flex: 1, marginBottom: 200 }}>
          {renderHeader()}
          {renderSearchBar()}
          {renderFiltersText()}
          {renderList()}
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default SearchFilter;
