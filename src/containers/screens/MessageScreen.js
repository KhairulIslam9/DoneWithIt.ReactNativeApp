import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../../components/lists";
import Screen from "../../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/images/KI.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/images/KI.png"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/images/KI.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
