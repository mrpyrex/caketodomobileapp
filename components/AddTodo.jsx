import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [theme, setTheme] = useState("");

  const onChange = (themeVal) => setTheme(themeVal);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Cake Todo ..."
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addTodo(theme)}>
        <Text style={styles.btnText}>Add Cake</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#34c7b1",
    padding: 9,
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default AddTodo;
