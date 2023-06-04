import { mysqlDB } from '../index.js';

class User {
    // 이메일을 이용하여 유저 검색
    static async findByEmail({ email }) {
        const query = 'SELECT id, password, nickname, description FROM user WHERE email = ?';
        const [rows] = await mysqlDB.query(query, [email]);

        const user = rows[0];
        return user;
    }

    // 유저ID를 이용하여 유저 검색
    static async findById({ userId }) {
        const query = 'SELECT id, email, password, userImage FROM user WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [userId]);

        const selectedUser = rows[0];

        return selectedUser;
    }

    // 새로운 유저 생성
    static async create({ email, password, nickname }) {
        const query = 'INSERT INTO user (email, password, nickname, flag) VALUES (?, ?, ?, "일반")';
        const [rows] = await mysqlDB.query(query, [email, password, nickname]);

        const createdUser = {
            email,
            password,
            nickname,
            successMessage: '회원가입에 성공하였습니다.',
            errorMessage: null,
        };

        return createdUser;
    }

    // 유저 정보 수정(내용, 별명)
    static async update({ userId, fieldToUpdate, newValue }) {
        const query = `UPDATE user SET ${fieldToUpdate} = ? WHERE id = ?`;
        const [rows] = await mysqlDB.query(query, [newValue, userId]);

        const updatedUser = {
            nickname: fieldToUpdate,
            description: newValue,
            successMessage: '유저 정보 수정에 성공하였습니다.',
            errorMessage: null,
        };

        return updatedUser; // update된 유저를 반환한다.
    }

    // 유저 정보 삭제
    static async delete({ userId }) {
        const query = 'UPDATE user SET deleteYN = "Y", deleteAt = CURRENT_TIMESTAMP WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [userId]);

        const deletedUser = {
            userId,
            successMessage: '유저 정보 삭제에 성공하였습니다.',
            errorMessage: null,
        };

        return deletedUser; // delete된 유저를 반환한다.
    }

    // 유저의 포인트 내역 불러오기
    static async getPoint({ userId }) {
        const query =
            'SELECT point.userId, point.currentPoint, point.accuPoint FROM user RIGHT JOIN point ON user.id = point.userId WHERE user.id = ?';
        const [rows] = await mysqlDB.query(query, [userId]);

        const userPoint = rows[0];

        return userPoint;
    }

    // 전체 유저 수 불러오기
    static async getCount() {
        const query = 'SELECT COUNT(*) AS userCount FROM user';
        const [rows] = await mysqlDB.query(query);

        const userCount = rows[0];

        return userCount;
    }
}

export { User };
