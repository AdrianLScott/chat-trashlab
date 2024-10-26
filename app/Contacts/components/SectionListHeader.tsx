import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

type SectionListHeaderProps = {
  title: string;
};

export const SectionListHeader = memo(({ title }: SectionListHeaderProps) => {
  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View
        style={[
          styles.sectionTitleContainer,
          { backgroundColor: primaryColor },
        ]}
      >
        <ThemedText type="subtitle" style={styles.title}>
          {title}
        </ThemedText>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  sectionTitleContainer: {
    height: 30,
    width: 30,
    marginVertical: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  title: {
    color: "white",
    lineHeight: 22,
  },
});
