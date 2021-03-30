import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { colors } from "../../assets/colors";

export default function ListItem(props) {
  const left = new Animated.Value(0);
  const opacity = new Animated.Value(1);

  function remove() {
    Animated.parallel([
      Animated.timing(left, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.back(1),
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      props.onRemove(props.item);
    });
  }

  return (
    <Animated.View
      style={[styles.itemContainer, { left: left, opacity: opacity }]}
    >
      <Text style={styles.itemTitle}>{props.item.title}</Text>
      <TouchableHighlight onPress={remove}>
        <Text style={styles.removeBtn}>X</Text>
      </TouchableHighlight>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingLeft: 15,
  },
  itemTitle: {
    flex: 1,
  },
  removeBtn: {
    padding: 7,
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: "center",
  },
});
