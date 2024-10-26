import { Image } from "react-native";

type MessageImageContentProps = {
  base64Image: string;
  height: number;
  width: number;
};

export const MessageImageContent = ({
  height,
  width,
  base64Image,
}: MessageImageContentProps) => {
  return (
    <Image
      height={height}
      width={width}
      resizeMode="contain"
      source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
    />
  );
};
