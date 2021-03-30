import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Intro from "./views/Intro";
import List from "./views/List";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <List onPress={toggle} />
      {isOpen ? null : <Intro onOpen={toggle} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
