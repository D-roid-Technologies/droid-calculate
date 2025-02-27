import React from "react";
import { StyleSheet } from "react-native";
import ScientificCalculator from "./src/app/screens/ScientificCalculator";
import OhmsLawCalculator from "./src/app/screens/OhmsLawCalculator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BMICalculator from "./src/app/screens/BMICalculator";

export default function App() {

  const StackNavigator = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="ScientificCalculator"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}>
        <StackNavigator.Screen name="ScientificCalculator" component={ScientificCalculator} />
        <StackNavigator.Screen name="OhmsLawCalculator" component={OhmsLawCalculator} />
        <StackNavigator.Screen name="BMICalculator" component={BMICalculator} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

// Function to check if a button is an operator
const isOperator = (value: string) => ["C", "DEL", "=", "+", "-", "*", "/", "sin", "cos", "tan", "log", "√", "x²"].includes(value);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    paddingHorizontal: 10,
  },
  display: {
    width: "100%",
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  inputText: {
    fontSize: 32,
    color: "#fff",
  },
  resultText: {
    fontSize: 24,
    color: "#0f0",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "22%",
    height: 80,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
  operatorButton: {
    backgroundColor: "#2B3E98",
  },
});