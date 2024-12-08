/*
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS providers;
            DROP TABLE IF EXISTS tickets;
            DROP TABLE IF EXISTS promotions;
            DROP TABLE IF EXISTS discounts;
            DROP TABLE IF EXISTS debts;
            DROP TABLE IF EXISTS products_providers;
            DROP TABLE IF EXISTS products_promotions;
            DROP TABLE IF EXISTS sales;
*/
export const initDatabase = async (db) => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            PRAGMA foreign_keys = ON;

            CREATE TABLE IF NOT EXISTS products(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT,
                barcode TEXT,
                unit_cost INTEGER,
                unit_price INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS providers(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT,
                phone TEXT,
                email TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS tickets(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                folio TEXT UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS promotions(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                is_active INTEGER,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS discounts(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                mount INTEGER,
                ticket_id INTEGER,
                FOREIGN KEY (ticket_id) REFERENCES tickets(id)
            );

            CREATE TABLE IF NOT EXISTS debts(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                debtor TEXT,
                mount INTEGER,
                is_paid INTEGER,
                ticket_id INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (ticket_id) REFERENCES tickets(id)
            );

            CREATE TABLE IF NOT EXISTS products_providers(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                product_id INTEGER,
                provider_id INTEGER,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (provider_id) REFERENCES providers(id)
            );

            CREATE TABLE IF NOT EXISTS products_promotions(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                product_id INTEGER,
                promotions_id INTEGER,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (promotions_id) REFERENCES promotions(id)
            );

            CREATE TABLE IF NOT EXISTS sales(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                unit_cost INTEGER,
                unit_price INTEGER,
                product_quantity INTEGER,
                product_id INTEGER,
                ticket_id INTEGER,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (ticket_id) REFERENCES tickets(id)
            );
        `);
    } catch (error) {
        console.log(error);
    }
}