import { ToastAndroid } from "react-native";

export const useToast = () => {
    return (message: string): void => (
        ToastAndroid.show(message, ToastAndroid.SHORT)
    );
};