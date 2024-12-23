import { useSQLiteContext } from "expo-sqlite";
import { Dispatch, SetStateAction, useEffect } from "react";
import { IWhere } from "../interfaces/IWhere";
import { IModelCrud } from "../interfaces/IModelCrud";

export const useFind = (
    setState: Dispatch<SetStateAction<{}>>,
    repository: any,
    fields = ['*'],
    where: IWhere
) => {
    const db = useSQLiteContext();

    useEffect(() => {
        const find = async () => {
            let result: any[] = [];
            const { query, values }: IModelCrud = repository.find(fields, where)
            try {
                result = await db.getAllAsync(query, values);
            } catch (error) {
                console.error(error);
            }
            setState(result[0]);
        };

        find();
    }, []);
};