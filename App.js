import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MainScreen from "./MainScreen";

export default function App() {
  return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
