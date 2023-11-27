import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useReducer } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import { FONTS, COLORS, SIZES, images } from "../constants";
import { MaterialIcons, FontAwesome, Fontisto } from "@expo/vector-icons";
import Input from "../components/Input";
import Button from "../components/Button";
import { reducer } from "../utils/reducers/formReducers";
import { validateInput } from "../utils/actions/formActions";

const initialState = {
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  };

const EditProfile = ({navigation}) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback(
      (inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result });
      },
      [dispatchFormState]
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 20,
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
            <Text style={{ ...FONTS.h4 }}>Edit Profile</Text>
          </View>
          <View style={{ marginVertical: 20, marginHorizontal:40, paddingVertical: 70, }}>
              <Input
                icon="user"
                iconPack={FontAwesome}
                id="fullName"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["fullName"]}
                placeholder="Enter your full name"
              />
              <Input
                icon="email"
                iconPack={MaterialIcons}
                id="email"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["email"]}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
              <Input
                icon="lock"
                iconPack={FontAwesome}
                id="password"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["password"]}
                autoCapitalize="none"
                placeholder="Enter your password"
                secureTextEntry
              />
              <Input
                icon="phone"
                iconPack={FontAwesome}
                id="phoneNumber"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["phoneNumber"]}
                placeholder="Enter your phone number"
              />

              <Input
                icon="blood-drop"
                iconPack={Fontisto}
                id="bloodType"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["bloodType"]}
                placeholder="Enter your blood type"
              />

              <Input
                icon="location-on"
                iconPack={MaterialIcons}
                id="location"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["location"]}
                placeholder="Enter your location"
              />
            </View>
            <Button
              title="Update"
              filled
              onPress={() => navigation.navigate("SuccessVerification")}
              style={{
                width: "50%",
                alignSelf: "center", 
              }}
            />
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default EditProfile