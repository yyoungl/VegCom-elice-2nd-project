import { mysqlDB } from '../index.js';

class User {
    // 새로운 유저 생성
    static async create({ email, password, nickname }) {
<<<<<<< HEAD
        const query = 'INSERT INTO user (email, password, nickname, flag) VALUES (?, ?, ?, "일반")';
        const [rows] = await mysqlDB.query(query, [email, password, nickname]);

        const createdUser = rows[0];
=======
        const query = 'INSERT INTO user (email, password, nickname) VALUES (?, ?, ?)';
        const [result] = await mysqlDB.query(query, [email, password, nickname]);

        const createdUser = JSON.parse(JSON.stringify(rows[0]));
>>>>>>> feature/김지원
        return createdUser;
    }

    // 이메일을 이용하여 유저 검색
    static async findByEmail({ email }) {
        const query = 'SELECT id, password, nickname, description FROM user WHERE email = ?';
        const [rows] = await mysqlDB.query(query, [email]);

        const user = rows[0];
        return user;
    }

    // 유저ID를 이용하여 유저 검색
    static async findById({ userId }) {
        const query = 'SELECT * FROM user WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [userId]);

        const user = rows[0];
        return user;
    }

    // 유저 정보 수정(내용, 별명)
    static async update({ userId, fieldToUpdate, newValue }) {
        const query = `UPDATE user SET ${fieldToUpdate} = ? WHERE id = ?`;
        await mysqlDB.query(query, [newValue, userId]);

        const updatedUser = await User.findById({ userId });
        return updatedUser; // update된 유저를 반환한다.
    }

    // 유저 정보 삭제
    static async delete({ userId }) {
        const query = 'UPDATE user SET deleteYN = "Y", deleteAt = CURRENT_TIMESTAMP WHERE id = ?';
        await mysqlDB.query(query, [userId]);

        const deletedUser = await User.findById({ userId });
        return deletedUser; // delete된 유저를 반환한다.
    }
}

export { User };
