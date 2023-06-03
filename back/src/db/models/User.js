import { mysqlDB } from '../index.js';

class User {
    // 이메일을 이용하여 유저 검색
    static async findByEmail({ email }) {
        const query = 'SELECT id, password, nickname, description FROM user WHERE email = ?';
        const [rows] = await mysqlDB.query(query, [email]);

        const user = JSON.parse(JSON.stringify(rows[0]));
        return user;
    }

    // 유저ID를 이용하여 유저 검색
    static async findById({ userId }) {
        const query = 'SELECT id, password FROM user WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [userId]);

        const user = JSON.parse(JSON.stringify(rows[0]));
        return user;
    }
}

export { User };
