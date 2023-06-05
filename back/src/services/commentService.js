import { User, Comment } from '../db/index.js';
import errors from '../../errors.js';

class commentService {
    static async createComment({ userId, postId, content, parentId }) {
        const user = await User.findById({ userId });

        if (!user) {
            throw errors.UserNotFoundId;
        }

        const createComment = await Comment.create({ userId, postId, content, parentId });

        let createdComment = {};
        if (createComment.affectedRows > 0) {
            createdComment = {
                userId,
                postId,
                content,
                successMessage: '댓글 작성에 성공하였습니다.',
                errorMessage: null,
            };
        } else {
            createdComment = {
                userId,
                postId,
                content,
                successMessage: null,
                errorMessage: '댓글 작성에 실패하였습니다. 입력값을 확인해주세요.',
            };
        }

        return createdComment;
    }

    static async updateComment({ userId, postId, commentId, content }) {
        const user = await User.findById({ userId });
        if (!user) {
            throw errors.UserNotFoundId;
        }

        const comment = await Comment.findById({ commentId });

        if (!comment) {
            throw errors.CommentNotFoundId;
        }

        const updateComment = await Comment.update({ postId, commentId, content });

        let updatedComment = {};
        if (updateComment.changedRows > 0) {
            updatedComment = {
                userId,
                postId,
                content,
                successMessage: '댓글 수정에 성공하였습니다.',
                errorMessage: null,
            };
        } else {
            updatedComment = {
                userId,
                postId,
                content,
                successMessage: null,
                errorMessage: '댓글 수정에 실패하였습니다. 입력값을 확인해주세요.',
            };
        }

        return updatedComment;
    }

    static async deleteComment({ userId, commentId }) {
        const user = await User.findById({ userId });

        if (!user) {
            throw errors.UserNotFoundId;
        }

        const comment = await Comment.findById({ commentId });

        if (!comment) {
            throw errors.CommentNotFoundId;
        }

        const deleteComment = await Comment.delete({ commentId });

        let deletedComment = {};
        if (deleteComment.affectedRows > 0) {
            deletedComment = {
                userId,
                commentId,
                successMessage: '댓글 삭제에 성공하였습니다.',
                errorMessage: null,
            };
        } else {
            deletedComment = {
                userId,
                postId,
                content,
                successMessage: null,
                errorMessage: '댓글 삭제에 실패하였습니다. commentId값을 확인해주세요.',
            };
        }

        return deletedComment;
    }

    static async getComment({ userId, postId }) {
        const user = await User.findById({ userId });

        if (!user) {
            throw errors.UserNotFoundId;
        }

        // 추후 게시물이 있는지 확인하는 로직 추가
        // const post = await Post.findById({ postId });

        // if (!post) {
        //     throw errors.PostNotFoundId;
        // }

        const selectComment = await Comment.select({ userId, postId });

        return selectComment;
    }
}

export { commentService };
