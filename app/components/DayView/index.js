import React from "react";
import { StyleSheet, Animated } from "react-native";
import { colors } from "../../assets/colors";

export default function DayView(props) {
  const getContainerStyle = {
    backgroundColor: props.scrollY.interpolate({
      inputRange: [
        0,
        props.pageHeight * 0.4,
        props.pageHeight * 0.8,
        props.pageHeight * 0.9,
        props.pageHeight,
      ],
      outputRange: [
        colors.sky1,
        colors.sky2,
        colors.sky3,
        colors.sky4,
        colors.sky1,
      ],
    }),
  };

  const getSunMoonStyle = {
    backgroundColor: props.scrollY.interpolate({
      inputRange: [
        0,
        props.pageHeight * 0.5,
        props.pageHeight * 0.65,
        props.pageHeight * 0.9,
      ],
      outputRange: [colors.white, colors.yellow, colors.orange, colors.white],
    }),
    left: props.scrollY.interpolate({
      inputRange: [0, props.pageHeight],
      outputRange: ["2%", "90%"],
    }),
    top: props.scrollY.interpolate({
      inputRange: [0, props.pageHeight * 0.5, props.pageHeight],
      outputRange: [60, 20, 60],
    }),
  };

  return (
    <Animated.View
      onStartShouldSetResponder={() => true}
      onResponderGrant={props.onPress}
      style={[styles.dayContainer, getContainerStyle]}
    >
      <Animated.View style={[styles.sunMoon, getSunMoonStyle]}></Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    height: 100,
    width: "100%",
  },
  sunMoon: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
