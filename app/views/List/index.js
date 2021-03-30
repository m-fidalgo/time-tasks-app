import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../../components/ListItem";

export default function List() {
  return (
    <View>
      <ListItem item={{ timeId: 1, title: "Acordar" }} />
    </View>
  );
}
