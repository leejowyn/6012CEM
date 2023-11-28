import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useReducer } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import { COLORS, images, FONTS, SIZES } from "../constants";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Input from "../components/Input";
import Button from "../components/Button";
import { reducer } from "../utils/reducers/formReducers";
import { validateInput } from '../utils/actions/formActions'

const initialState = {
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  };

const ChangePassword = ({navigation}) => {
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
        <View
          style={{
            flex: 1,
            marginHorizontal: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginVertical: 20 }}>
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
          </View>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: "center",
              marginVertical: 14,
            }}
          >
            Your password have changed successfully.
          </Text>
          <Button
            title="Update"
            filled
            onPress={() => navigation.navigate("SuccessVerification")}
            style={{
              width: "100%",
            }}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ChangePassword