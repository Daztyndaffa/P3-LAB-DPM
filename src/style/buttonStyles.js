import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    commonButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: "lightgray", // Warna tombol sama untuk keduanya
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 5,
    },
    commonButtonText: {
        color: "black", // Warna teks sama untuk keduanya
        fontWeight: "bold",
    },
});
