import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { commentController } from '../controllers/commentController.js';

const commentRouter = Router();

// 댓글 작성하기
commentRouter.post('/', async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const { postId, content } = req.body;
        const parentId = req.body.parendId ?? 0;
        const comment = await commentController.create({ userId, postId, content, parentId });

        res.status(comment.statusCode).send(comment.response);
    } catch (error) {
        next(error);
    }
});

// 댓글 수정하기
commentRouter.put('/:commentId', async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const commentId = req.params.commentId;
        const { postId, content } = req.body;

        const comment = await commentController.update({ userId, postId, commentId, content });

        res.status(comment.statusCode).send(comment.response);
    } catch (error) {
        next(error);
    }
});

// 댓글 삭제하기
commentRouter.delete('/:commentId', async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const commentId = req.params.commentId;

        const comment = await commentController.delete({ userId, commentId });

        res.status(comment.statusCode).send(comment.response);
    } catch (error) {
        next(error);
    }
});

// 게시물에 해당하는 댓글 불러오기
commentRouter.get('/:postId', async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const postId = req.params.postId;

        const comment = await commentController.getComment({ userId, postId });

        res.status(comment.statusCode).send(comment.response);
    } catch (error) {
        next(error);
    }
});

export { commentRouter };
