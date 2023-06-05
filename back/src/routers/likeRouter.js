import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { likeController } from '../controllers/likeController.js';

const likeRouter = Router();

// 특정 사용자를 좋아요
likeRouter.post("/:id", login_required, async function (req, res, next) {
    try {
        const userId = req.userId;
        const user = await likeController.likelist({userId});
        
        const likes = await LikeService.countUp({ userId, targetUserId });
        
        res.status(200).send({ success: true, likes });
    } catch (error) {
        next(error);
    }
});
  
export { likeRouter };
