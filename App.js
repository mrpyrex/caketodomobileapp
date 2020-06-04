import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, theme: "Spiderman" },
    { id: 2, theme: "Dora The Explorer" },
    { id: 3, theme: "Paw Patrol" },
  ]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id != id);
    });
  };

  const addTodo = (theme) => {
    if (!theme) {
      Alert.alert("Error", "Please add a theme", [{ text: "Ok" }]);
    } else {
      setTodos((prevTodos) => {
        return [{ id: Math.random().toString(), theme }, ...prevTodos];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todos item={item} deleteTodo={deleteTodo} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
