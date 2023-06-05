import { mysqlDB } from '../index.js';

class Post {
    //1. 전체 피드 시간순
    static async getAllPosts() {
        // post를 전체 조회
        const query = 'SELECT * FROM post';
        const [rows] = await mysqlDB.query(query);

        return rows;
    }

    //2. 피드 상세페이지
    static async getPost({ postId }) {
        const query = 'SELECT * FROM post WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [postId]);

        return rows;
        //table postImage(postId) - imageURL
    }

    //3. 피드 작성하기
    static async create({ userId, content, isPrivate }) {
        const query = 'INSERT INTO post (userId, content, isPrivate) VALUES (?, ?, ?)';
        const [rows] = await mysqlDB.query(query, [userId, content, isPrivate]);

        return rows;
        //table postImage - imageURL
    }

    //4. 피드 수정하기
    static async update({ postId, fieldToUpdate, newValue }) {
        const query = `UPDATE post SET ${fieldToUpdate} = ? WHERE id = ?`;
        const [rows] = await mysqlDB.query(query, [newValue, postId]);

        return rows;
        //table postImage - imageURL
    }

    //5. 피드 삭제하기
    static async delete({ postId }) {
        const query = 'UPDATE post SET deleteYN = "Y", deleteAt = CURRENT_TIMESTAMP WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [postId]);

        return rows;
    }
}

export { Post };
