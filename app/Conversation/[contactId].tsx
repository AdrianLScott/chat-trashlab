import { ScreenContainer } from "@/components/ScreenContainer";
import { ThemedText } from "@/components/ThemedText";
import { generateUUID } from "@/libs/uuid-generator";
import { useState } from "react";
import { FlatList, TextInput, TouchableHighlight, View } from "react-native";

type Message = {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
};

const Conversation = () => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const onMessageSent = () => {
    const message: Message = {
      id: generateUUID(),
      text: textValue,
      sender: "me",
      timestamp: Date.now(),
    };

    setMessages((prevMessages) => {
      const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
      messagesCopy.push(message);
      return messagesCopy;
    });

    setTextValue("");
  };

  return (
    <ScreenContainer>
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          inverted
          renderItem={({ item }) => <ThemedText>{item.text}</ThemedText>}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1 }}
          value={textValue}
          onChangeText={(val) => setTextValue(val)}
        />
        <TouchableHighlight
          onPress={onMessageSent}
          style={{ backgroundColor: "blue", padding: 15 }}
        >
          <ThemedText>Send</ThemedText>
        </TouchableHighlight>
      </View>
    </ScreenContainer>
  );
};

export default Conversation;
