import { mysqlDB } from '../index.js';

class Post {
    //1. 전체 피드 최신순
    static async getAllPosts() {
        const query =
            'SELECT post.*, post_image.imageUrl FROM post JOIN post_image ON post.id = post_image.postId ORDER BY createAt DESC';
        const [rows] = await mysqlDB.query(query);

        return rows;
    }

    //2. 피드 상세페이지
    static async getPost({ postId }) {
        // const query = 'SELECT * FROM post WHERE id = ?';
        const query =
            'SELECT post.*, post_image.imageUrl FROM post JOIN post_image ON post.id = post_image.postId WHERE post.id = ?';
        const [rows] = await mysqlDB.query(query, [postId]);

        return rows;
    }

    //3. 피드 작성하기
    static async create({ userId, content, isPrivate, imageUrl }) {
        const query1 = 'INSERT INTO post (userId, content, isPrivate) VALUES (?, ?, ?)';
        const query2 = 'INSERT INTO post_image (postId, imageUrl) VALUES (LAST_INSERT_ID(), ?)';

        // 다중 쿼리를 실행하기 위해서는 'multipleStatements' 옵션을 활성화해야하는데
        // 보안 상의 문제로는 다중쿼리가 좋진 않다라고 합니다..
        const [row1] = await mysqlDB.query(query1, [userId, content, isPrivate]);
        await mysqlDB.query(query2, [imageUrl]);
        // postId 값을 얻기 위해서는 row1의 값만 알아도 충분함

        return row1;
    }

    //4. 피드 수정하기(포스트와 이미지를 나눠서 작성)
    static async update({ postId, fieldToUpdate, newValue }) {
        const query = `UPDATE post SET ${fieldToUpdate} = ? WHERE id = ?`;
        await mysqlDB.query(query, [newValue, postId]);
    }

    static async updatePostImage({ postId, imageUrl }) {
        const query = 'UPDATE post_image SET imageUrl = ? WHERE postId = ?';
        await mysqlDB.query(query, [imageUrl, postId]);
    }

    //5. 피드 삭제하기
    static async delete({ postId }) {
        const query = 'UPDATE post SET deleteYN = "Y", deleteAt = CURRENT_TIMESTAMP WHERE id = ?';
        const [rows] = await mysqlDB.query(query, [postId]);

        return rows;
    }
}

export { Post };
