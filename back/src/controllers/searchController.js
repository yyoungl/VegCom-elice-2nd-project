import { searchService } from '../services/searchService.js';
import errors from '../../errors.js';

class searchController {
    static async getKeywordPost({ userId, keyword }) {
        try {
            const post = await searchService.getPost({ userId, keyword });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: post,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else {
                throw errors.SearchFailedError;
            }
        }
    }
}

export { searchController };
