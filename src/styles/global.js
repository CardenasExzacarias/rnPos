import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16
    },
    item: {
        padding: 10,
        minHeight: 50,
        marginVertical: 10,
        minWidth: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    }
})