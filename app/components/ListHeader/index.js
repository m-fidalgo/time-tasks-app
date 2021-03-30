import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default function ListHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText} onPress={() => props.onPress(props.item)}>
        {props.item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
  headerText: {
    color: colors.white,
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
