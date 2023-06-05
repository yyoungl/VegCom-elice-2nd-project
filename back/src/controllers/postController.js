import { postService } from '../services/postService.js';

class postController {
    // 1. 전체 피드 시간순
    static async getAllPosts() {
        try {
            const posts = await postService.getAllPosts();
            return {
                statusCode: 200,
                response: posts,
            };
        } catch (error) {
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    // 2. 피드 상세페이지
    static async getPost({ postId }) {
        try {
            const post = await postService.getPost({ postId });
            return {
                statusCode: 200,
                response: post,
            };
        } catch (error) {
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    // 3. 피드 작성하기
    static async createPost({ userId, content, isPrivate }) {
        try {
            const post = await postService.createPost({ userId, content, isPrivate });

            return {
                statusCode: 200,
                response: post,
            };
        } catch (error) {
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    // 4. 피드 수정하기
    static async setPost({ postId, toUpdate }) {
        try {
            const post = await postService.setPost({ postId, toUpdate });
            return {
                statusCode: 200,
                response: post,
            };
        } catch (error) {
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    // 5. 피드 삭제하기
    static async delPost({ postId }) {
        try {
            const post = await postService.delPost({ postId });
            return {
                statusCode: 200,
                response: post,
            };
        } catch (error) {
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }
}

export { postController };
