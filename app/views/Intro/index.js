import React, { useEffect } from "react";
import { Text, TouchableHighlight, StyleSheet, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../assets/colors";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedTouchableHighlight = Animated.createAnimatedComponent(
  TouchableHighlight
);

export default function Intro(props) {
  const top = new Animated.Value(0);
  const timeTop = new Animated.Value(0);

  useEffect(() => {
    timeStart();
  }, []);

  function timeStart() {
    timeTop.setValue(0);
    Animated.timing(timeTop, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }

  function open() {
    top.setValue(0);
    Animated.timing(top, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(props.onOpen);
  }

  const timeStyle = {
    top: timeTop.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "40%"],
    }),
  };

  const containerStyle = {
    transform: [
      {
        translateY: top.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -450],
        }),
      },
      {
        rotateX: top.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "89deg"],
        }),
      },
    ],
  };

  return (
    <AnimatedLinearGradient
      style={[styles.container, containerStyle]}
      colors={[colors.lightBlue, colors.lighterBlue]}
    >
      <AnimatedTouchableHighlight
        style={[styles.timeContainer, timeStyle]}
        onPress={open}
      >
        <Text style={styles.time}>10:00</Text>
      </AnimatedTouchableHighlight>
    </AnimatedLinearGradient>
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
