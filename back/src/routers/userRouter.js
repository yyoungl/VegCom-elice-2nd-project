import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { userAuthService } from '../services/userService.js';

const userAuthRouter = Router();

// 회원가입
userAuthRouter.post('/register', async function (req, res, next) {
    try {
        const { email, password, nickname } = req.body;

        const createUser = await userAuthService.createUser({ email, password, nickname });

        if (createUser.errorMessage) {
            res.status(400).send({ error: createUser.errorMessage });
            throw new Error(createUser.errorMessage);
        }

        res.status(200).send(createUser);
    } catch (error) {
        next(error);
    }
});

// 로그인
userAuthRouter.post('/login', async function (req, res, next) {
    try {
        const { email, password } = req.body;

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

// 로그인 검증
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

// 유저 실적 보여주기
userAuthRouter.get('/point', login_required, async function (req, res, next) {
    try {
        console.log(req);
        const userId = req.currentUserId;
        const userPoint = await userAuthService.getUserPoint({ userId });

        if (userPoint.errorMessage) {
            res.status(400).send({ error: deletedUser.errorMessage });
            throw new Error(userPoint.errorMessage);
        }

        res.status(200).send(userPoint);
    } catch (error) {
        next(error);
    }
});

// 유저 정보 불러오기
userAuthRouter.get('/:userId', async function (req, res, next) {
    try {
        const userId = req.params.userId;
        const user = await userAuthService.getUserInfo({ userId });

        if (user.errorMessage) {
            res.status(400).send({ error: user.errorMessage });
            throw new Error(user.errorMessage);
        }

        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

// 유저 정보 수정하기(별명, 설명)
userAuthRouter.put('/:userId', async function (req, res, next) {
    try {
        const userId = req.params.userId;
        const { nickname, description } = req.body;
        const toUpdate = { nickname, description };
        const updatedUser = await userAuthService.setUser({ userId, toUpdate });

        if (updatedUser.errorMessage) {
            res.status(400).send({ error: updatedUser.errorMessage });
            throw new Error(updatedUser.errorMessage);
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        next(error);
    }
});

// 유저 정보 삭제하기
userAuthRouter.delete('/:userId', async function (req, res, next) {
    try {
        const userId = req.params.userId;
        const deletedUser = await userAuthService.deleteUser(userId);

        if (deletedUser.errorMessage) {
            res.status(400).send({ error: deletedUser.errorMessage });
            throw new Error(deletedUser.errorMessage);
        }

        res.status(200).send(deletedUser);
    } catch (error) {
        next(error);
    }
});

export { userAuthRouter };
