import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Cake Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#e34d66",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});

export default Header;
