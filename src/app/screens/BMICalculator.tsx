import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BMICalculator: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color={"#000000"} />
            </TouchableOpacity>
            <Text>BMI Calculator</Text>
        </SafeAreaView>
    )
}

export default BMICalculator

const styles = StyleSheet.create({})