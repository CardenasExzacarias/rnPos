import { Pressable, StyleSheet, Text } from "react-native";

interface BottomRightButtonProps {
    onPress: () => void;
}

const BottomRightButton: React.FC<BottomRightButtonProps> = ({ onPress }) => {
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
        bottom: 20,
        right: 20,
        backgroundColor: '#007bff',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});