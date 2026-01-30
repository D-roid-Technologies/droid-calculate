import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OhmsLawCalculator: React.FC<any> = ({ navigation }) => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [power, setPower] = useState("");

  const [calculatedVoltage, setCalculatedVoltage] = useState<string | null>(null);
  const [calculatedCurrent, setCalculatedCurrent] = useState<string | null>(null);
  const [calculatedResistance, setCalculatedResistance] = useState<string | null>(null);
  const [calculatedPower, setCalculatedPower] = useState<string | null>(null);

  const calculateOhmsLaw = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);
    const P = parseFloat(power);

    // Calculate based on the available values
    if (!isNaN(V) && !isNaN(I)) setCalculatedResistance((V / I).toFixed(2));
    if (!isNaN(V) && !isNaN(R)) setCalculatedCurrent((V / R).toFixed(2));
    if (!isNaN(I) && !isNaN(R)) setCalculatedVoltage((I * R).toFixed(2));
    if (!isNaN(V) && !isNaN(I)) setCalculatedPower((V * I).toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Ionicons name="arrow-back-outline" size={24} color={"#ffffff"} />
        <Text style={styles.title}>Ohm's Law Calculator</Text>
      </TouchableOpacity>


      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Voltage (V)"
          keyboardType="numeric"
          value={voltage}
          onChangeText={setVoltage}
        />
        <TextInput
          style={styles.input}
          placeholder="Current (I)"
          keyboardType="numeric"
          value={current}
          onChangeText={setCurrent}
        />
        <TextInput
          style={styles.input}
          placeholder="Resistance (R)"
          keyboardType="numeric"
          value={resistance}
          onChangeText={setResistance}
        />
        <TextInput
          style={styles.input}
          placeholder="Power (P)"
          keyboardType="numeric"
          value={power}
          onChangeText={setPower}
        />

        <TouchableOpacity style={styles.button} onPress={calculateOhmsLaw}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        {/* Display the results */}
        <View style={styles.resultsContainer}>
          {calculatedVoltage && (
            <Text style={styles.resultText}>Calculated Voltage (V): {calculatedVoltage}</Text>
          )}
          {calculatedCurrent && (
            <Text style={styles.resultText}>Calculated Current (I): {calculatedCurrent}</Text>
          )}
          {calculatedResistance && (
            <Text style={styles.resultText}>Calculated Resistance (R): {calculatedResistance}</Text>
          )}
          {calculatedPower && (
            <Text style={styles.resultText}>Calculated Power (P): {calculatedPower}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#444",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#333",
    color: "#fff",
  },
  button: {
    backgroundColor: "#2B3E98",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#333",
    borderRadius: 10,
    width: "100%",
  },
  resultText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
});

export default OhmsLawCalculator;
