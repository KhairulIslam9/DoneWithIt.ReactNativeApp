import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppIcon from "../../components/AppIcon";
import colors from "../../config/colors";
import ListItem from "../../components/lists/ListItem";
import ListItemSeparator from "../../components/lists/ListItemSeparator";
import Screen from "../../components/Screen";
import routes from "../navigation/routes";

import useAuth from "../../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGE_SCREEN,
  },
];

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../../assets/images/KI.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => props.navigation.navigate(item.targetScreen)}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
          onPress={logOut}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;
