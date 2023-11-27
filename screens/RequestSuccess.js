import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import { images } from "../constants";
import Button from "../components/Button";

const RequestSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <PageContainer>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 22,
        }}
      >
        <Image
          source={images.completed}
          resizeMode="contain"
          style={{
            marginBottom: 40,
          }}
        />
        <Text
            style={{
              marginBottom: 20, 
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Blood is successfully requested.
          </Text>
        <Button
          title="Finish"
          filled
          onPress={() => navigation.navigate("BottomTabNavigation")}
          style={{
            width: "100%",
          }}
        />
      </View>
    </PageContainer>
  </SafeAreaView>
);
};


export default RequestSuccess