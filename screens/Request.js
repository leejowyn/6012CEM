import React, { useCallback, useReducer } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome, Fontisto } from "@expo/vector-icons";
import Input from "../components/Input";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import { FONTS, COLORS, images } from "../constants";
import { reducer } from "../utils/reducers/formReducers";
import { validateInput } from "../utils/actions/formActions";

const initialState = {
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const Request = ({ navigation }) => {
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
            <Text style={{ ...FONTS.h4 }}>Create A Request</Text>
          </View>
          <View style={{ marginVertical: 20, marginHorizontal:20,paddingVertical: 80, }}>
              <Input
                icon="location-on"
                iconPack={MaterialIcons}
                id="location"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["location"]}
                placeholder="City"
              />
              <Input
                icon="home"
                iconPack={FontAwesome}
                id="fullName"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities[""]}
                placeholder="Hospital"
              />
              <Input
                icon="blood-drop"
                iconPack={Fontisto}
                id="bloodType"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["bloodType"]}
                placeholder="Blood type"
              />
               <Input
                icon="phone"
                iconPack={FontAwesome}
                id="phoneNumber"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["phoneNumber"]}
                placeholder="Mobile"
              />
              <Input
                icon="pencil"
                iconPack={FontAwesome}
                id="note"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities[""]}
                autoCapitalize="none"
                placeholder="Add a note"
              />
            </View>         
  
              <Button
                title="Request"
                filled
                onPress={() => navigation.navigate("RequestSuccess")}
                style={{
                  width: "40%",
                  alignSelf: "center", 
                }}
              />
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
            }}
          >
          </View>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Request;
