import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BMICalculator: React.FC<any> = ({ navigation }) => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (!weight || !height) return;

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
        setBmi(bmiValue);

        if (bmiValue < 18.5) setCategory("Underweight");
        else if (bmiValue < 24.9) setCategory("Normal weight");
        else if (bmiValue < 29.9) setCategory("Overweight");
        else setCategory("Obese");
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color={"#000000"} />
            </TouchableOpacity>
            <Text>BMI Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter height (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />

            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            {bmi !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>BMI: {bmi.toFixed(2)}</Text>
                    <Text style={styles.categoryText}>Category: {category}</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

export default BMICalculator

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: { width: "100%", padding: 10, borderWidth: 1, borderRadius: 8, marginBottom: 10 },
    button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, alignItems: "center" },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    resultContainer: { marginTop: 20, alignItems: "center" },
    resultText: { fontSize: 18, fontWeight: "bold" },
    categoryText: { fontSize: 16, color: "gray" },
});