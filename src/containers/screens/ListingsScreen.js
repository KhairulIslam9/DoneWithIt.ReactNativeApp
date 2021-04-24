import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppActivityIndicator from "../../components/AppActivityIndicator";
import AppText from "../../components/AppText";
import Card from "../../components/Card";
import colors from "../../config/colors";
import listingApi from "../../api/listings";
import routes from "../navigation/routes";
import Screen from "../../components/Screen";
import useApi from "../../hooks/useApi";

function ListingsScreen(props) {
  const getListingsApi = useApi(listingApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  // const getListings = () => {
  //   const result = getListingsApi.request();
  //   if (!result.ok) {
  //     console.log("ERROR LISTINGS");
  //   }
  //   console.log(getListingsApi);
  // };
  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {/* si le serveur est coupe ou pas de connextion internet */}
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          refreshing={refreshing}
          onRefresh={() => getListingsApi.request()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                props.navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)
              }
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
