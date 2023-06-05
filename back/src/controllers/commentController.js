import { commentService } from '../services/commentService.js';
import errors from '../../errors.js';

class commentController {
    static async create({ userId, postId, content, parentId }) {
        try {
            const comment = await commentService.createComment({ userId, postId, content, parentId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: comment,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else {
                throw errors.test;
            }
        }
    }

    static async update({ userId, postId, commentId, content }) {
        try {
            const comment = await commentService.updateComment({ userId, postId, commentId, content });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: comment,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else if (error.name === 'CommentNotFoundId') {
                throw errors.CommentNotFoundId;
            } else {
                throw errors.test;
            }
        }
    }

    static async delete({ userId, commentId }) {
        try {
            const comment = await commentService.deleteComment({ userId, commentId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: comment,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else if (error.name === 'CommentNotFoundId') {
                throw errors.CommentNotFoundId;
            } else {
                throw errors.test;
            }
        }
    }

    static async getComment({ userId, postId }) {
        try {
            const comment = await commentService.getComment({ userId, postId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: comment,
            };
        } catch (error) {
            if (error.name === 'UserNotFoundId') {
                throw errors.UserNotFoundId;
            } else if (error.name === 'PostNotFoundId') {
                throw errors.PostNotFoundId;
            } else {
                throw errors.test;
            }
        }
    }
}

export { commentController };
