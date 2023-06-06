import { mysqlDB } from '../index.js';

class Search {
    // keyword 검색하기
    static async select({ keyword }) {
        const query = `SELECT post.id, \
                                post.userId as post_userId, \
                                post.content, \
                                post_image.imageUrl, \
                                post_like.userId as post_like_userId, \
                                post_like_count.likeCount \
                        FROM post \
                        JOIN post_image \
                        ON post.id = post_image.postId \
                        LEFT JOIN post_like \
                        ON post.id = post_like.postId \
                        JOIN post_like_count \
                        ON post.id = post_like_count.postId \
                        WHERE content LIKE CONCAT('%', ?, '%') AND post.deleteYN = "N" `;
        const [rows] = await mysqlDB.query(query, [keyword]);

        return rows;
    }
}

export { Search };
