import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { ProviderRepository } from "../repository/ProviderRepository";

export const useFetchProviders = (fields = ['*']) => {
    const db = useSQLiteContext();
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const fetchProviders = async () => {
            let result;
            try {
                result = await db.getAllAsync(ProviderRepository.getAll(fields));
            } catch (error) {
                console.error(error);
            }
            setProviders(result);
        };

        fetchProviders();
    }, []);

    return { providers, setProviders }
};