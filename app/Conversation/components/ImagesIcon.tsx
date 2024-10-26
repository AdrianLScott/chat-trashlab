import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

type ImagesIconProps = {
  onPress: () => void;
};

export const ImagesIcon = ({ onPress }: ImagesIconProps) => {
  const iconColor = useThemeColor({}, "icon");
  const underlayColor = useThemeColor({}, "transparentHighlight");

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={styles.container}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="image-multiple"
        size={30}
        color={iconColor}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginRight: 2,
  },
});
