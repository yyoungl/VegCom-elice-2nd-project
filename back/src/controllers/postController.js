import { postService } from '../services/postService.js';

class postController {
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

    static async getAllPosts() {
        const posts = await postService.getAllPosts();

        return posts;
    }
}

export { postController };
