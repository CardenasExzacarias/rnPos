import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

export const createTables = async (db) => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            PRAGMA foreign_keys = ON;

            CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                lastname TEXT
            );
        `);
    } catch (error) {
        console.log(error);
    }
}