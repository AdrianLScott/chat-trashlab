import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";

const AVATAR_SMALL_SIZE = 30;
const AVATAR_MEDIUM_SIZE = 40;
const AVATAR_LARGE_SIZE = 50;

type AvatarSize = "small" | "medium" | "large";
type AvatarProps = {
  uri: string;
  size?: AvatarSize;
  style?: StyleProp<ImageStyle>;
};

export const Avatar = ({ uri, size = "medium", style }: AvatarProps) => {
  const avatarSize = getAvatarSize(size);

  return (
    <Image
      source={{ uri: uri }}
      style={[
        { height: avatarSize, borderRadius: avatarSize / 2 },
        styles.avatar,
        style
      ]}
    />
  );
};

const getAvatarSize = (size: AvatarSize) => {
  const sizes = {
    small: AVATAR_SMALL_SIZE,
    medium: AVATAR_MEDIUM_SIZE,
    large: AVATAR_LARGE_SIZE,
  };

  return sizes[size];
};

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
  },
});
