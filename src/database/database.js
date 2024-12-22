/*
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS suppliers;
            DROP TABLE IF EXISTS tickets;
            DROP TABLE IF EXISTS promotions;
            DROP TABLE IF EXISTS discounts;
            DROP TABLE IF EXISTS debts;
            DROP TABLE IF EXISTS products_suppliers;
            DROP TABLE IF EXISTS products_promotions;
            DROP TABLE IF EXISTS sales;

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

            CREATE TABLE IF NOT EXISTS products_promotions(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                product_id INTEGER,
                promotions_id INTEGER,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (promotions_id) REFERENCES promotions(id)
            );

            DROP TABLE IF EXISTS tickets;
            DROP TABLE IF EXISTS sales;
            DROP TABLE IF EXISTS products_suppliers;
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS suppliers;
*/
export const initDatabase = async (db) => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            PRAGMA foreign_keys = ON;

            CREATE TABLE IF NOT EXISTS products(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT NOT NULL DEFAULT '',
                barcode TEXT UNIQUE NOT NULL DEFAULT '',
                unit_cost INTEGER DEFAULT 0,
                unit_price INTEGER DEFAULT 0,
                quantity INTEGER DEFAULT 0,
                is_active BOOLEAN DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS suppliers(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT NOT NULL DEFAULT '',
                phone TEXT,
                email TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS tickets(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                folio TEXT UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS products_suppliers(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                product_id INTEGER NOT NULL,
                supplier_id INTEGER NOT NULL,
                FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
                FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE SET NULL
            );

            CREATE TABLE IF NOT EXISTS sales(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                unit_cost INTEGER NOT NULL,
                unit_price INTEGER NOT NULL,
                product_quantity INTEGER NOT NULL,
                product_id INTEGER NOT NULL,
                ticket_id INTEGER NOT NULL,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
            );

            CREATE TRIGGER IF NOT EXISTS update_timestamp
            AFTER UPDATE ON products
            FOR EACH ROW
            BEGIN
                UPDATE products
                SET updated_at = CURRENT_TIMESTAMP
                WHERE id = OLD.id AND OLD.updated_at != CURRENT_TIMESTAMP;
            END;

            CREATE TRIGGER IF NOT EXISTS update_timestamp
            AFTER UPDATE ON suppliers
            FOR EACH ROW
            BEGIN
                UPDATE suppliers
                SET updated_at = CURRENT_TIMESTAMP
                WHERE id = OLD.id AND OLD.updated_at != CURRENT_TIMESTAMP;
            END;

            CREATE TRIGGER IF NOT EXISTS update_timestamp
            AFTER UPDATE ON tickets
            FOR EACH ROW
            BEGIN
                UPDATE tickets
                SET updated_at = CURRENT_TIMESTAMP
                WHERE id = OLD.id AND OLD.updated_at != CURRENT_TIMESTAMP;
            END;
        `);
    } catch (error) {
        console.log(error);
    }
}