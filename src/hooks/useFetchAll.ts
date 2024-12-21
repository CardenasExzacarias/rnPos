import { useSQLiteContext } from "expo-sqlite";
import { Dispatch, SetStateAction, useEffect } from "react";

export const useFetchAll = (
    setState: Dispatch<SetStateAction<any[]>>,
    repository: any,
    fields = ['*']
) => {
    const db = useSQLiteContext();

    useEffect(() => {
        const fetchProviders = async () => {
            let result: any[] = [];
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