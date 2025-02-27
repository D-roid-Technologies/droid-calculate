import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ScientificCalculator: React.FC<any> = ({ navigation }) => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [dis, setDis] = useState<any>("none");

    const [sta, setSta] = useState<any>(false);
    // Function to handle button presses
    const handlePress = (value: string) => {
        if (value === "=") {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else if (value === "DEL") {
            setInput((prev) => prev.slice(0, -1));
        } else if (value === "π") {
            setInput((prev) => prev + Math.PI.toString());
        } else if (value === "e") {
            setInput((prev) => prev + Math.E.toString());
        } else if (value === "√") {
            setInput((prev) => `Math.sqrt(${prev})`);
        } else if (value === "x²") {
            setInput((prev) => `(${prev})**2`);
        } else if (value === "sin") {
            setInput((prev) => `Math.sin(${prev})`);
        } else if (value === "cos") {
            setInput((prev) => `Math.cos(${prev})`);
        } else if (value === "tan") {
            setInput((prev) => `Math.tan(${prev})`);
        } else if (value === "log") {
            setInput((prev) => `Math.log10(${prev})`);
        } else {
            setInput((prev) => prev + value);
        }
    };

    const menuPressed = () => {
        if (sta === false) {
            setSta(true);
        } else {
            setSta(false);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={{ padding: 20, position: "absolute", top: 40, backgroundColor: "#2B3E98", left: 0, height: "100%", zIndex: 1, display: !sta ? 'none' : 'flex', width: '65%', }}>
                <View style={{ marginBottom: 40, flexDirection: "row", gap: 20, alignItems: 'center' }}>
                    <Image source={require('../../../assets/icon.png')} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: "#ffffff", fontWeight: 600, letterSpacing: 2 }}>D'roid Calculate</Text>
                </View>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => menuPressed()}>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: "#ffffff", padding: 10, marginBottom: 10 }} onPress={() => navigation.navigate("OhmsLawCalculator")}>
                            <Text style={{ letterSpacing: 2 }}>Engineering Calclator</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#ffffff", padding: 10 }} onPress={() => navigation.navigate("BMICalculator")}>
                            <Text style={{ letterSpacing: 2 }}>BMI Calculator</Text>
                        </TouchableOpacity>
                        {/* <FontAwesome name="ellipsis-h" size={45} color="#ffffff" /> */}
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 20 }} onPress={() => menuPressed()}>
                <FontAwesome name="ellipsis-v" size={45} color="#2B3E98" />
            </TouchableOpacity>
            {/* Display Section */}
            <View style={styles.display}>
                <ScrollView horizontal>
                    <Text style={styles.inputText}>{input || "0"}</Text>
                </ScrollView>
                <Text style={styles.resultText}>{result}</Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonsContainer}>
                {[
                    "C", "DEL", "π", "e",
                    "sin", "cos", "tan", "log",
                    "√", "x²", "(", ")",
                    "7", "8", "9", "/",
                    "4", "5", "6", "*",
                    "1", "2", "3", "-",
                    "0", ".", "=", "+"
                ].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.button, isOperator(item) && styles.operatorButton]}
                        onPress={() => handlePress(item)}
                    >
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
// Function to check if a button is an operator
const isOperator = (value: string) => ["C", "DEL", "=", "+", "-", "*", "/", "sin", "cos", "tan", "log", "√", "x²"].includes(value);


export default ScientificCalculator

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