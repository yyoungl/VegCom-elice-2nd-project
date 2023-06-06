import { Router } from 'express';
import { searchController } from '../controllers/searchController.js';

const searchRouter = Router();

// 내용 검색하기
searchRouter.get('/', async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const { keyword } = req.body;
        const post = await searchController.getKeywordPost({ userId, keyword });

        res.status(post.statusCode).send(post.response);
    } catch (error) {
        next(error);
    }
});

export { searchRouter };
