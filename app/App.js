import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Intro from "./views/Intro";
import List from "./views/List";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <List />
      {isOpen ? null : <Intro onOpen={onOpen} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
