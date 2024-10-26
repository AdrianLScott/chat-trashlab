import { AvatarSize } from "./types";

const AVATAR_SMALL_SIZE = 30;
const AVATAR_MEDIUM_SIZE = 40;
const AVATAR_LARGE_SIZE = 50;

export const getAvatarSize = (size: AvatarSize) => {
  const sizes = {
    small: AVATAR_SMALL_SIZE,
    medium: AVATAR_MEDIUM_SIZE,
    large: AVATAR_LARGE_SIZE,
  };

  return sizes[size];
};