import { Router } from 'express';
import { postController } from '../controllers/postController.js';

const postRouter = Router();

// 1. 전체 피드 시간순
postRouter.get('/list', async function (req, res, next) {
    try {
        const posts = await postController.getAllPosts();

        res.status(posts.statusCode).send(posts.response);
    } catch (error) {
        next(error);
    }
});

// 2. 피드 상세페이지
postRouter.get('/:postId', async function (req, res, next) {
    try {
        const postId = req.params.postId;
        const post = await postController.getPost({ postId });

        res.status(post.statusCode).send(post.response);
    } catch (error) {
        next(error);
    }
});

// 3. 피드 작성
postRouter.post('/', async function (req, res, next) {
    try {
        // const userId = req.currentUserId;
        // 일단 thunder client에서 확인 불가능하기 때문에 userId 값을 body에 넣어서 전달
        const { userId, content, isPrivate } = req.body;
        const post = await postController.createPost({ userId, content, isPrivate });

        res.status(post.statusCode).send(post.response);
    } catch (error) {
        next(error);
    }
});

// 4. 피드 수정
postRouter.put('/:postId', async function (req, res, next) {
    try {
        const postId = req.params.postId;
        const { content, isPrivate } = req.body;
        const toUpdate = { content, isPrivate };
        const post = await postController.setPost({ postId, toUpdate });

        res.status(post.statusCode).send(post.response);
    } catch (error) {
        next(error);
    }
});

// 5. 피드 삭제
postRouter.delete('/:postId', async function (req, res, next) {
    try {
        const postId = req.params.postId;
        const post = await postController.delPost({ postId });

        res.status(post.statusCode).send(post.response);
    } catch (error) {
        next(error);
    }
});

export { postRouter };
