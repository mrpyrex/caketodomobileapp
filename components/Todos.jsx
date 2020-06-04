import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Todo = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity style={styles.todoList}>
      <View style={styles.todoListView}>
        <Text style={styles.text}>{item.theme}</Text>
        <Icon
          name="delete"
          size={20}
          color="#e34d66"
          onPress={() => deleteTodo(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoList: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  todoListView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default Todo;
