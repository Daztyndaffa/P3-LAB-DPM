import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProfileScreen from './src/pages/profile/index';
import Constant from 'expo-constants';
import LifeCycle from './src/components/lifecycle/index';
import { useState } from "react";

export default function App() {
    const [showLifeCycle, setShowLifeCycle] = useState(true);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style='auto' />
            <ProfileScreen />

            {showLifeCycle && <LifeCycle />}
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShowLifeCycle(!showLifeCycle)}
            >
                <Text style={styles.buttonText}>Toggle LifeCycle Component</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Constant.statusBarHeight,
    },
    button: {
        backgroundColor: "#d3d3d3", // Warna abu-abu cerah
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 20,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
