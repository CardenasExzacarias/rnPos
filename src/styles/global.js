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
        maxWidth: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#fff',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    m5:{
        margin: 5
    },
    mx_5: {
        marginHorizontal: 5
    },
    my_5: {
        marginVertical: 5
    }
})