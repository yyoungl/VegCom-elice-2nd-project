import { userAuthService } from '../services/userService.js';

class userAuthController {
    static async login({ email, password }) {
        try {
            const user = await userAuthService.getUser({ email, password });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async register({ email, password }) {
        try {
            const user = await userAuthService.createUser({ email, password, nickname });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async isLogin({ userId }) {
        try {
            const user = await userAuthService.getUserInfo({ userId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async getPoint({ userId }) {
        try {
            const point = await userAuthService.getUserPoint({ userId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: point,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async getCount({ userId }) {
        try {
            const count = await userAuthService.getUserCount({ userId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: count,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async getInfo({ userId }) {
        try {
            const user = await userAuthService.getUserInfo({ userId });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async setInfo({ userId, toUpdate }) {
        try {
            const user = await userAuthService.setUserInfo({ userId, toUpdate });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }

    static async delInfo({ userId, toUpdate }) {
        try {
            const user = await userAuthService.delUserInfo({ userId, toUpdate });
            // 성공적인 응답 반환
            return {
                statusCode: 200,
                response: user,
            };
        } catch (error) {
            // 오류 발생 시 오류 응답 반환
            return {
                statusCode: 400,
                response: { error: error.message },
            };
        }
    }
}

export { userAuthController };
