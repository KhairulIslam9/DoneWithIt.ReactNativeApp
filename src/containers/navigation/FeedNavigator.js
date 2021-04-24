import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    // modal pour garder les haitude en ios
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTING_SCREEN} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS_SCREEN}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
