import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AppNavigator from "./src/containers/navigation/AppNavigator";
import AuthNavigator from "./src/containers/navigation/AuthNavigator";
import AuthContext from "./src/auth/contex";
import authStorage from "./src/auth/storage";
import navigationTheme from "./src/containers/navigation/navigationTheme";
import OfflineNotice from "./src/components/OfflineNotice";
import { navigationRef } from "./src/containers/navigation/rootNavigation";
// import logger from "./src/utility/logger";

// logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  console.log(user);
  // Fonction si on npm i expo-splash-sreen
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
