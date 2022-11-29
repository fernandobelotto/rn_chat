// generate complete chat app component for react native with expo and typescript
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Button
        title="Go to chat"
        onPress={() => navigation.navigate("Chat")}
      ></Button>
    </View>
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hello developer",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

  function handleSend(newMessage:any = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{
        _id: 1,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});