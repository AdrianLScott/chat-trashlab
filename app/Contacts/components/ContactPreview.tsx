import { Avatar } from "@/components/Avatar";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, TouchableHighlight } from "react-native";

type ContactPreviewProps = {
  avatar: string;
  name: string;
  onPress: () => void;
};

export const ContactPreview = ({
  avatar,
  name,
  onPress,
}: ContactPreviewProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={"#e6e6e6"}
      style={styles.container}
    >
      <>
        <Avatar uri={avatar} style={{ marginRight: 15 }} />
        <ThemedText type="defaultSemiBold">{name}</ThemedText>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
