import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default function ListItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{props.item.title}</Text>
      <TouchableHighlight>
        <Text style={styles.removeBtn}>X</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    paddingLeft: 15,
  },
  itemTitle: {},
  removeBtn: {
    padding: 7,
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: "center",
  },
});
