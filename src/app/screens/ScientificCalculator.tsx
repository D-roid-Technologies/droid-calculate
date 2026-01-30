import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ScientificCalculator: React.FC<any> = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [input]);

  const formatNumber = (num: number) => {
    if (typeof num !== "number" || isNaN(num)) return "Error";
    return new Intl.NumberFormat().format(num);
  };

  const handlePress = (value: string) => {
    if (value === "=") {
      if (!input.trim()) {
        setResult("Enter an expression");
        return;
      }
      try {
        // Safer than eval, but still use with caution.
        const evaluated = new Function(`return ${input}`)();
        const formatted = formatNumber(evaluated);
        setResult(formatted);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "π") {
      setInput((prev) => prev + Math.PI.toFixed(8));
    } else if (value === "e") {
      setInput((prev) => prev + Math.E.toFixed(8));
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

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar />

      {/* Side Menu */}
      <View
        style={{
          padding: 20,
          position: "absolute",
          top: 40,
          backgroundColor: "#2B3E98",
          left: 0,
          height: "100%",
          zIndex: 1,
          display: menuVisible ? "flex" : "none",
          width: "65%",
        }}
      >
        <View
          style={{
            marginBottom: 40,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/icon.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text
            style={{ color: "#ffffff", fontWeight: "600", letterSpacing: 2 }}
          >
            D'roid Calculate
          </Text>
        </View>
        <TouchableOpacity onPress={toggleMenu}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#ffffff",
                padding: 10,
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate("OhmsLawCalculator")}
            >
              <Text style={{ letterSpacing: 2 }}>Engineering Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: "#ffffff", padding: 10 }}
              onPress={() => navigation.navigate("BMICalculator")}
            >
              <Text style={{ letterSpacing: 2 }}>BMI Calculator</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu Toggle */}
      <TouchableOpacity
        style={{ alignSelf: "flex-end", marginRight: 20 }}
        onPress={toggleMenu}
      >
        <FontAwesome name="ellipsis-h" size={45} color="#2B3E98" />
      </TouchableOpacity>

      {/* Display */}
      <View style={styles.display}>
        <ScrollView horizontal ref={scrollRef}>
          <Text style={styles.inputText}>{input || "0"}</Text>
        </ScrollView>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {[
          "C",
          "DEL",
          "π",
          "e",
          "sin",
          "cos",
          "tan",
          "log",
          "√",
          "x²",
          "(",
          ")",
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
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
    </KeyboardAvoidingView>
  );
};

const isOperator = (value: string) =>
  [
    "C",
    "DEL",
    "=",
    "+",
    "-",
    "*",
    "/",
    "sin",
    "cos",
    "tan",
    "log",
    "√",
    "x²",
  ].includes(value);

export default ScientificCalculator;

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
