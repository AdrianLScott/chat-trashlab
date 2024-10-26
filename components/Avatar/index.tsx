import { Image, StyleSheet } from "react-native";
import { AvatarProps } from "./types";
import { getAvatarSize } from "./utils";

export const Avatar = ({ uri, size = "medium" }: AvatarProps) => {
  const avatarSize = getAvatarSize(size);

  return (
    <Image
      source={{ uri: uri }}
      style={[
        { height: avatarSize, borderRadius: avatarSize / 2 },
        styles.avatar,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    marginRight: 15,
  },
});
