import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const DonationCard = (props) => {
  return (
    <View
      style={{
        width: SIZES.width - 44,
        height: 148,
        borderRadius: SIZES.padding,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        marginVertical: 4,
        borderColor: COLORS.secondaryWhite,
        borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: COLORS.Black,
            fontWeight: 500,
            marginVertical: 2,
            marginBottom: 9,
          }}
        >
          {props.requestMessage}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.secondaryBlack,
            marginVertical: 2,
          }}
        >
          Name
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            fontWeight: 500,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.secondaryBlack,
            marginVertical: 2,
          }}
        >
          Location
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            fontWeight: 500,
            marginVertical: 2,
          }}
        >
          {props.location}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.secondaryBlack,
            marginTop: 4
          }}
        >
          {props.postedDate} Ago
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <TouchableOpacity 
        onPress={props.onPress}
        >
        <Image
          source={icons.bplusIcon}
          resizeMode="contain"
          style={{
            marginBottom: 32,
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={props.onPress}
        >
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.primary,
            }}
          >
            Donate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DonationCard;
