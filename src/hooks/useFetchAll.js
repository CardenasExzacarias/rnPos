import { useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";

export const useFetchAll = (setState, repository, fields = ['*']) => {
    const db = useSQLiteContext();

    useEffect(() => {
        const fetchProviders = async () => {
            let result;
            try {
                result = await db.getAllAsync(repository.getAll(fields));
            } catch (error) {
                console.error(error);
            }
            setState(result);
        };

        fetchProviders();
    }, []);
};