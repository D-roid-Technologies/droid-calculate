import React, { useEffect } from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import ScientificCalculator from "./src/app/screens/ScientificCalculator";
import OhmsLawCalculator from "./src/app/screens/OhmsLawCalculator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BMICalculator from "./src/app/screens/BMICalculator";

export default function App() {
  const theme = useColorScheme();

  useEffect(() => {
    StatusBar.setHidden(false); // Ensure the status bar is visible
    if (theme === 'dark') {
      StatusBar.setBarStyle('light-content'); // Light content (white text) for dark theme
    } else {
      StatusBar.setBarStyle('dark-content'); // Dark content (black text) for light theme
    }
  }, [theme]);

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