import { ScreenContainer } from "@/components/ScreenContainer";
import { ThemedText } from "@/components/ThemedText";
import { storage, StorageType } from "@/libs/storage";
import { uuidGenerator } from "@/libs/uuid-generator";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, TextInput, TouchableHighlight, View } from "react-native";

type Message = {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
};

const buildMessage = (text: string, sender: string): Message => ({
  id: uuidGenerator.generateUUID(),
  text,
  sender,
  timestamp: Date.now(),
});

const Conversation = () => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { contactId } = useLocalSearchParams<{contactId: string}>();

  const onMessageSent = async () => {
    try {
      const message: Message = buildMessage(textValue, "me");

      setMessages((prevMessages) => {
        const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
        messagesCopy.push(message);
        return messagesCopy;
      });

      await storage.setItem(StorageType.conversations, {
        [contactId]: messages,
      });
      // TODO: Inject the message to global conversation state so it can be visible in the conversations list
      // TODO: send message to the server

      setTextValue("");
    } catch {
      // if something fails in the process we should warn the user
    }
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
