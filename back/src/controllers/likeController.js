import { likeService } from '../services/likeService.js';
import errors from '../../errors.js';

//오류처리
class likeController {
    static async likeList({ userId }) {
        try {
            const user = await likeService.getRankList({ userId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else {
                throw errors.test;
            }
        }
    }
}

export { likeController };
