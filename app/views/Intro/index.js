import React, { useState, useEffect } from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../styles/colors";

export default function Intro(props) {
  const [top, setTop] = useState(0);
  const [timeTop, setTimeTop] = useState(0);

  useEffect(() => {
    timeStart();
  }, []);

  useEffect(() => {
    if (timeTop !== 0) {
      setTimeout(timeStart, 100);
    }
  }, [timeTop]);

  useEffect(() => {
    if (top !== 0) {
      setTimeout(open, 100);
    }
  }, [top]);

  function timeStart() {
    if (timeTop < 10) {
      setTimeTop(timeTop + 1);
    }
  }

  function open() {
    if (top < 10) {
      setTop(top + 1);
    } else props.onOpen();
  }

  const timeStyle = {
    top: `${4 * timeTop}%`,
  };

  const containerStyle = {
    transform: [{ translateY: -45 * top }, { rotateX: `${8.9 * top}deg` }],
  };

  return (
    <LinearGradient
      style={[styles.container, containerStyle]}
      colors={[colors.lightBlue, colors.lighterBlue]}
    >
      <TouchableHighlight
        style={[styles.timeContainer, timeStyle]}
        onPress={open}
      >
        <Text style={styles.time}>10:00</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: 200,
  },
  timeContainer: {
    padding: 15,
    paddingRight: 0,
    backgroundColor: colors.bgOpacity,
  },
  time: {
    fontSize: 50,
    color: colors.white,
  },
});
