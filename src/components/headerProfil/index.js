import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            {/* Nama di sudut kiri atas */}
            <Text style={styles.nameText}>Daztyndaffa_</Text>

            {/* Foto profil di samping angka postingan */}
            <View style={styles.counterContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: "https://i.pinimg.com/736x/91/b0/e9/91b0e93d4f96bc0a16c7446a31500e03.jpg"}} // Ganti dengan URL gambar profil
                />
                <View style={styles.itemContainer}>
                    <Text style={styles.numberText}>3</Text>
                    <Text style={styles.labelText}>postingan</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.numberText}>1.396</Text>
                    <Text style={styles.labelText}>pengikut</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.numberText}>951</Text>
                    <Text style={styles.labelText}>mengikuti</Text>
                </View>
            </View>

            {/* Tombol Edit Profile dan Bagikan Profile */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={buttonStyles.commonButton}>
                    <Text style={buttonStyles.commonButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyles.commonButton}>
                    <Text style={buttonStyles.commonButtonText}>Bagikan Profile</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: "lightgray",
    },
    nameText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    profileImage: {
        width: 85,
        height: 85,
        borderRadius: 55,
        marginRight: 10,
    },
    itemContainer: {
        alignItems: "center",
        marginHorizontal: 5,
    },
    numberText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    labelText: {
        color: "gray",
        fontSize: 13,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
});
