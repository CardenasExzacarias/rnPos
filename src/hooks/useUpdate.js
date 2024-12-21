import { useSQLiteContext } from 'expo-sqlite';

export const useUpdate = () => {
    const db = useSQLiteContext();

    const update = async (repository, dto) => {
        const { query, values } = repository.update(dto);
        return new Promise((res, rej) => {
            db.runAsync(query, values)
                .then((record) => res(record.lastInsertRowId))
                .catch((error) => rej(error));
        });
    };

    return update;
};