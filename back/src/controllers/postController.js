import { postService } from '../services/postService.js';

// error 처리가 안되서?? try-catch문 사용(안하면 app crush남)
// 1. 전체 피드 시간순
async function getAllposts(req, res, next) {
    try {
        const posts = await postService.getAllPosts();

        res.status(200).send(posts);
    } catch (error) {
        next(error);
    }
}

// 2. 피드 상세페이지
async function getPost(req, res, next) {
    try {
        const postId = req.params.postId;
        const post = await postService.getPost({ postId });

        res.status(200).send(post);
    } catch (error) {
        next(error);
    }
}

// 3. 피드 작성
async function createPost(req, res, next) {
    try {
        // const userId = req.currentUserId;
        // 일단 userId와 imageUrl을 body에 담아서 보냄
        const { userId, content, imageUrl } = req.body;

        const post = await postService.createPost({ userId, content, imageUrl });

        res.status(200).send(post);
    } catch (error) {
        next(error);
    }
}

// 4. 피드 수정
async function setPost(req, res, next) {
    try {
        const postId = req.params.postId;
        // 일단 사진 body로 받게 설정
        const { content, imageUrl } = req.body;

        const toUpdate = { content, imageUrl };
        const post = await postService.setPost({ postId, toUpdate });

        res.status(200).send(post);
    } catch (error) {
        next(error);
    }
}

// 5. 피드 삭제
async function delPost(req, res, next) {
    try {
        const postId = req.params.postId;
        const post = await postService.delPost({ postId });

        res.status(200).send({ message: '게시물 삭제가 완료되었습니다.' });
    } catch (error) {
        next(error);
    }
}

export { getAllposts, getPost, createPost, setPost, delPost };
