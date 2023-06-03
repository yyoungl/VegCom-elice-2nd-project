import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { userAuthService } from '../services/userService.js';

const userAuthRouter = Router();

userAuthRouter.post("/register", async function (req, res, next) {
    try {
        const {email, password, nickname} = req.body;
        const isDuplicate = await userAuthService.checkDuplicate({email});

        if (isDuplicate) {
            res.status(409).send({ message: "이미 존재하는 이메일 입니다." });
            throw new Error(user.errorMessage);
        } 

          const user = await userAuthService.createUser({ email, password, nickname});
          res.status(200).send({user});

        
    }catch (error) {
        next(error);
    }
});

userAuthRouter.post('/login', async function (req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await userAuthService.getUser({ email, password });

        if (user.errorMessage) {
            res.status(400).send({ error: user.errorMessage });
            throw new Error(user.errorMessage);
        }

        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

userAuthRouter.get('/isLogin', login_required, async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const currentUserInfo = await userAuthService.getUserInfo({ userId });

        if (currentUserInfo.errorMessage) {
            throw new Error(currentUserInfo.errorMessage);
        }

        res.status(200).send(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

export { userAuthRouter };

