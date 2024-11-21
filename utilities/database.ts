import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('MainDB');

// type SQLiteDatabase = {
//   transaction: (callback: (tx: any) => void) => void;
// };

// const database: SQLiteDatabase = db;

export const createTable = (): void => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT);',
      [],
      () => console.log('Table created successfully'),
      (_, error) => {
        console.error('Error creating table:', error);
        return false;
      }
    );
  });
};

export const registerUser = (username: string, password: string): void => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Users (Username, Password) VALUES (?,?)',
      [username, password],
      () => console.log('User registered successfully'),
      (_, error) => {
        console.error('Error registering user:', error);
        return false;
      }
    );
  });
};

export const loginUser = (
  username: string,
  password: string,
  successCallback: () => void,
  errorCallback: () => void
): void => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Users WHERE Username = ? AND Password = ?',
      [username, password],
      (tx, results) => {
        if (results.rows.length > 0) {
          successCallback();
        } else {
          errorCallback();
        }
      },
      (_, error) => {
        console.error('Error logging in user:', error);
        return false;
      }
    );
  });
};

// Ensure you have a default export
const Database = {
  createTable,
  registerUser,
  loginUser,
};

export default Database;
