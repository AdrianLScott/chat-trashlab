import { ScreenContainer } from "@/components/ScreenContainer";
import { messageService } from "@/helpers/message-service";
import { logger } from "@/libs/logger";
import { getContact } from "@/providers/contacts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Message } from "./components/Message";
import { styles } from "./styles";
import {
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { MessageType } from "./types";
import { useConversationColors } from "./hooks/useConversationColors";
import { buildMessage } from "./utils/message-builder";

const Conversation = () => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { contactId } = useLocalSearchParams<{ contactId: string }>();
  const [mediaPermissionStatus, requestMediaPermission] =
    useMediaLibraryPermissions();
  const {
    buttonColor,
    inputBorder,
    outwardMessageColor,
    outwardMessageTextColor,
    inwardMessageColor,
    inwardMessageTextColor,
    highlightedButtonColor
  } = useConversationColors();

  useEffect(() => {
    setTitleHeader();

    async function setTitleHeader() {
      try {
        const contact = await getContact(contactId);
        router.setParams({ contactName: contact?.name });
      } catch (e) {
        logger.error(`Error fetching contact ${e}`);
      }
    }
  }, []);

  useEffect(() => {
    // TODO: Improve how we fetch the conversation
    fetchMessages();

    async function fetchMessages() {
      try {
        const storedMessages = await messageService.getConversation(contactId);
  
        if (storedMessages) {
          setMessages(storedMessages);
        }
      }
      catch (e) {
        Alert.alert(
          "We had an issue while fetching conversation, please try again later"
        );
        logger.error(e);
        router.navigate("/Contacts");
      }
    }
  }, []);

  const updateMessages = useCallback((newMessage: MessageType) => {
    setMessages((prevMessages) => {
      const messagesCopy = prevMessages.map((msg) => ({ ...msg }));
      messagesCopy.push(newMessage);
      return messagesCopy;
    });
  }, []);

  const onMessageSent = async () => {
    try {
      const newMessage: MessageType = buildMessage(textValue, "me");

      updateMessages(newMessage);

      await messageService.sendMessage(contactId, newMessage);
      setTextValue("");

      // Temp: Simulate a user response
      scheduleAnswer();
    } catch(e) {
      logger.error(`Error sending message ${e}`);
      // if something fails in the process we should warn the user
    }
  };

  const scheduleAnswer = () => {
    setTimeout(() => {
      const newMessage: MessageType = buildMessage("Hello there!", contactId);

      updateMessages(newMessage);

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
        {/* <ImagesIcon onPress={onAttachImagePress} /> */}
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
