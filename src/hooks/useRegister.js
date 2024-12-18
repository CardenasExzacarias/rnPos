import { useSQLiteContext } from "expo-sqlite";

export const useRegister = (repository, dto) => {
    const db = useSQLiteContext();

    const { query, values } = repository.create(dto);

    const register = async () => {
        return new Promise((res, rej) => {
            db.runAsync(query, values)
                .then(() => res("data inserted"))
                .catch((error) => rej(error));
        });
    };

    return register;
};