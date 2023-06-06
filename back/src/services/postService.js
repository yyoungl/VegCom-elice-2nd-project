import { Post } from '../db/index.js';

class postService {
    //1. 전체 피드 시간순
    static async getAllPosts() {
        const posts = await Post.getAllPosts();

        return posts;
    }

    //2. 피드 상세페이지
    static async getPost({ postId }) {
        const post = await Post.getPost({ postId });

        if (!post) {
            throw new Error('게시물 조회를 실패했습니다.');
        }

        return post;
    }

    //3. 피드 작성하기
    static async createPost({ userId, content, isPrivate, imageUrl }) {
        const post = await Post.create({
            userId,
            content,
            isPrivate,
            imageUrl,
        });

        // mySQL은 조작을 하면? ResultSetHeader 형태로 받아와지기 때문에
        // insertId 값을 이용해서 새로 추가된 id값을 알아내고 그 값을
        // getPost에 넣어서 반환(아래도 동일 작업)
        const postId = post.insertId;
        const createdPost = await Post.getPost({ postId });

        return createdPost;
    }

    //4. 피드 수정하기
    static async setPost({ postId, toUpdate }) {
        let post = await Post.getPost({ postId });

        if (!post) {
            throw new Error('게시물 조회를 실패했습니다.');
        }

        if (toUpdate.content) {
            const fieldToUpdate = 'content';
            const newValue = toUpdate.content;
            post = await Post.update({ postId, fieldToUpdate, newValue });
        }

        if (toUpdate.isPrivate !== null) {
            const fieldToUpdate = 'isPrivate';
            const newValue = toUpdate.isPrivate;
            post = await Post.update({ postId, fieldToUpdate, newValue });
        }

        if (toUpdate.imageUrl) {
            const { imageUrl } = toUpdate;
            post = await Post.updatePostImage({ postId, imageUrl });
        }

        const updatedPost = await Post.getPost({ postId });

        return updatedPost;
    }

    //5. 피드 삭제하기
    static async delPost({ postId }) {
        const post = await Post.getPost({ postId });

        if (!post) {
            throw new Error('게시물 조회를 실패했습니다.');
        }

        await Post.delete({ postId });

        const deletedPost = await Post.getPost({ postId });

        return deletedPost;
    }
}

export { postService };
