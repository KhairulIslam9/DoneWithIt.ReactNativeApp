import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppButton from "../../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-red.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => props.navigation.navigate(routes.LOGIN_SCREEN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => props.navigation.navigate(routes.REGISTER_SCREEN)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
