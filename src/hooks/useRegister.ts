import { useSQLiteContext } from "expo-sqlite";

export const useRegister = () => {
    const db = useSQLiteContext();

    const register = async (repository: any, dto: any): Promise<number | any> => {
        const { query, values } = repository.create(dto);
        return new Promise((res, rej) => {
            db.runAsync(query, values)
                .then((record) => res(record.lastInsertRowId))
                .catch((error) => rej(error));
        });
    };

    return register;
};