import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGE_SCREEN} component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
