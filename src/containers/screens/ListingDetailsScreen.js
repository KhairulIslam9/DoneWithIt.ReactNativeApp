import React from "react";
import Constant from "expo-constants";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../../components/AppText";
import ContactSellerForm from "../../components/ContactSellerForm";
import colors from "../../config/colors";
import ListItem from "../../components/lists/ListItem";

function ListingDetailsScreen(props) {
  const listing = props.route.params;

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/images/KI.png")}
            title="Khairul Islam"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
