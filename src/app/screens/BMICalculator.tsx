import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Define types for navigation prop
type BMICalculatorNavigationProp = StackNavigationProp<any, any>;

interface BMICalculatorProps {
    navigation: BMICalculatorNavigationProp;
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ navigation }) => {
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");

    const calculateBMI = (): void => {
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                <Ionicons name="arrow-back-outline" size={24} color={"#ffffff"} />
                <Text style={styles.title}>BMI Calculator</Text>
            </TouchableOpacity>

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
    );
};

export default BMICalculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: "#333",
        color: "#fff",
    },
    button: {
        backgroundColor: "#2B3E98",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    resultContainer: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 20,
        width: "100%",
    },
    resultText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    categoryText: {
        fontSize: 16,
        color: "#fff",
        marginTop: 10,
    },
    backArrow: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 20,
        alignItems: "center"
    },
});
