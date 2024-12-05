import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const LifeCycle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect did Mount");

        return () => {
            console.log("Component Will Unmount");
        };
    }, []);

    useEffect(() => {
        console.log("Component Did Update: Count berubah menjadi", count);
    }, []);

    const changeCount = () => {
        setCount(count + 1);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Life Cycle Component
            </Text>
            <TouchableOpacity style={styles.button} onPress={changeCount}>
                <Text style={styles.buttonText}>Update Count</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginTop: 10 }}>Count: {count}</Text>
        </View>
    );
};

export default LifeCycle;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#d3d3d3",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
