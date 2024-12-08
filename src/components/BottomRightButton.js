import { Pressable, StyleSheet, Text, View } from "react-native";

const BottomRightButton = ({ onPress }) => {
    return (
        <Pressable style={styles.addButton} onPress={onPress}>
            <Text style={styles.addButtonText}>+</Text>
        </Pressable>
    );
};

export default BottomRightButton;

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 20, // Distance from the bottom of the screen
        right: 20,  // Distance from the right of the screen
        backgroundColor: '#007bff',
        width: 60,
        height: 60,
        borderRadius: 30, // Makes it circular
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});