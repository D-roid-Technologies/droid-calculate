import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OhmsLawCalculator: React.FC<any> = ({ navigation }) => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [power, setPower] = useState("");

  const calculateOhmsLaw = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);
    const P = parseFloat(power);

    if (!isNaN(V) && !isNaN(I)) setResistance((V / I).toFixed(2));
    if (!isNaN(V) && !isNaN(R)) setCurrent((V / R).toFixed(2));
    if (!isNaN(I) && !isNaN(R)) setVoltage((I * R).toFixed(2));
    if (!isNaN(V) && !isNaN(I)) setPower((V * I).toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color={"#000000"} />
      </TouchableOpacity>
      <Text style={styles.title}>Ohm's Law Calculator</Text>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#fff" },
  button: { backgroundColor: "#007BFF", padding: 15, marginTop: 10, borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});

export default OhmsLawCalculator;
