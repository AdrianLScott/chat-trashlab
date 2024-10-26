import { ScreenContainer } from "@/components/ScreenContainer";
import { messageService } from "@/helpers/message-service";
import { useThemeColor } from "@/hooks/useThemeColor";
import { logger } from "@/libs/logger";
import { uuidGenerator } from "@/libs/uuid-generator";
import { getContact } from "@/providers/contacts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableHighlight, View } from "react-native";
import { Message } from "./components/Message";
import { styles } from "./styles";
import { ImagesIcon } from "./components/ImagesIcon";

type MessageType = {
  id: string;
  text: string;
  sender: string;
  reaction?: string;
  timestamp: number;
};

const buildMessage = (text: string, sender: string): MessageType => ({
  id: uuidGenerator.generateUUID(),
  text,
  sender,
  timestamp: Date.now(),
});

const Conversation = () => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { contactId } = useLocalSearchParams<{ contactId: string }>();
  const buttonColor = useThemeColor({}, "button");
  const inputBorder = useThemeColor({}, "inputBorder");
  const outwardMessageColor = useThemeColor({}, "outwardMessage");
  const outwardMessageTextColor = useThemeColor({}, "outwardMessageText");
  const inwardMessageColor = useThemeColor({}, "inwardMessage");
  const inwardMessageTextColor = useThemeColor({}, "inwardMessageText");
  const highlightedButtonColor = useThemeColor({}, "buttonHighlighted");
  const iconColor = useThemeColor({}, "icon");

  useEffect(() => {
    // TODO: Improve how we fetch the conversation and error handling
    getContact(contactId)
      .then(async (contact) => {
        if (!contact) {
          alert("We had an issue fetching the contact, please try again later");
          logger.error("Error fetching contact");
          router.navigate("/Contacts");
          return;
        }

        router.setParams({ contactName: contact.name });

        const fetchMessages = async () => {
          const storedMessages = await messageService.getConversation(
            contactId
          );

          if (storedMessages) {
            setMessages(storedMessages);
          }
        };
        await fetchMessages();
      })
      .catch((e) => {
        alert(
          "We had an issue while fetching conversation, please try again later"
        );
        logger.error(e);
        router.navigate("/Contacts");
      });
  }, []);

  const onMessageSent = async () => {
    try {
      const newMessage: MessageType = buildMessage(textValue, "me");

      setMessages((prevMessages) => {
        const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
        messagesCopy.push(newMessage);
        return messagesCopy;
      });

      await messageService.sendMessage(contactId, newMessage);
      setTextValue("");

      // Temp: Simulate a user response
      scheduleAnswer();
    } catch {
      // if something fails in the process we should warn the user
    }
  };

  const scheduleAnswer = () => {
    setTimeout(() => {
      const newMessage: MessageType = buildMessage("Hello there!", contactId);

      setMessages((prevMessages) => {
        const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
        messagesCopy.push(newMessage);
        return messagesCopy;
      });

      messageService.sendMessage(contactId, newMessage);
    }, 1000);
  };

  const sendLike = async (messageId: string) => {
    try {
      await messageService.reactMessage(contactId, messageId, "like");

      setMessages((prevMessages) => {
        const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
        const messageIndex = messagesCopy.findIndex(
          (msg) => msg.id === messageId
        );
        messagesCopy[messageIndex].reaction = "like";
        return messagesCopy;
      });
    } catch (e) {
      alert("We had an issue while sending the like, please try again later");
      logger.error(`Error sending like: ${e}`);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <FlatList
          data={messages}
          style={{ paddingHorizontal: 10 }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 15 }}
          renderItem={({ item }) => {
            if (item.sender === "me") {
              return (
                <Message
                  align="right"
                  outwardMessageColor={outwardMessageColor}
                  outwardMessageTextColor={outwardMessageTextColor}
                  text={item.text}
                />
              );
            }
            return (
              <Message
                align="left"
                hasReaction={!!item.reaction}
                onDoubleTap={() => sendLike(item.id)}
                outwardMessageColor={inwardMessageColor}
                outwardMessageTextColor={inwardMessageTextColor}
                text={item.text}
              />
            );
          }}
        />
      </View>
      <View style={styles.actionsContainer}>
        <ImagesIcon onPress={() => alert('Attach imach')} />
        <View style={[styles.inputContainer, { borderColor: inputBorder }]}>
          {/* TODO: It should be a ThemedInput from global components folder */}
          <TextInput
            style={styles.textInput}
            value={textValue}
            onChangeText={(val) => setTextValue(val)}
          />
        </View>
        {/* TODO: Move to global components folder */}
        <TouchableHighlight
          onPress={onMessageSent}
          underlayColor={highlightedButtonColor}
          style={[styles.button, { backgroundColor: buttonColor }]}
        >
          <MaterialCommunityIcons name="send" color={"white"} size={30} />
        </TouchableHighlight>
      </View>
    </ScreenContainer>
  );
};

export default Conversation;
