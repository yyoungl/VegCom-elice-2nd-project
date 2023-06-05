import { mysqlDB } from '../index.js';

//좋아요는 한 게시물 당 한번만 가능
//좋아요 선택시 체크가 안되어 있으면 체크하고, 이미 되어 잇으면 해지

//userid와 postid를 찾는 모델 작성하기
//없다면 새롭게 생성하고 업데이트 해주는 모델 작성
//있다면 삭제해주고 업데이트 해주는 모델 작성

// like 모델
class Like {
  static async findHistory({postId, userId}) {
      // 새로운 좋아요 생성.
      const query = 'INSERT INTO post_like (postId, userId) VALUES (?, ?)';
      const [rows] = await mysqlDB.query(query, [postId, userId]);

      return rows;
  }
  
  static async createAndUpdate(likeId) {
      // 좋아요 생성.
      const query = 'DELETE FROM post_like WHERE id = ?';
      const [rows] = await mysqlDB.query(query, [likeId]);

      return rows;
  }

  static async deleteAndUpdate(likeId) {
    // 좋아요 삭제.
    const query = 'DELETE FROM post_like WHERE id = ?';
    const [rows] = await mysqlDB.query(query, [likeId]);

    return rows;
  }

}

export { Like };
