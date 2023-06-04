import { User } from '../db/index.js';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthService {
    // 로그인 검사
    static async getUser({ email, password }) {
        const user = await User.findByEmail({ email });

        // 이메일 검증
        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        // 비밀번호 확인
        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash);
        // const isPasswordCorrect = password == correctPasswordHash;
        if (!isPasswordCorrect) {
            const errorMessage = '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        // 유저 정보가 있고 비밀번호가 일치하면 JWT 토큰을 생성한다.
        const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
        const token = jwt.sign({ userId: user.id }, secretKey);

        // 유저 정보 반환
        const id = user.id;
        const name = user.nickname;
        const description = user.description;

        const loginUser = {
            token,
            id,
            email,
            name,
            description,
            successMessage: '로그인에 성공했습니다.',
            errorMessage: null,
        };

        return loginUser;
    }

    // ID로 유저 검색
    static async getUserInfo({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        const selectedUser = {
            id: user.id,
            email: user.email,
            password: user.password,
            userImage: user.userImage,
            successMessage: '유저 정보 검색에 성공하셨습니다.',
            errorMessage: null,
        };

        return selectedUser;
    }

    // 유저 생성
    static async createUser({ email, password, nickname }) {
        // 이메일 중복 확인
        const user = await User.findByEmail({ email });
        if (user) {
            const errorMessage = '이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.';
            return { errorMessage };
        }

        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUser = await User.create({
            email,
            password: hashedPassword,
            nickname,
        });

        return createUser;
    }

    // 유저 정보 수정(별명, 설명)
    static async setUser({ userId, toUpdate }) {
        let user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        // toUpdate -> nickName, description
        for (const [fieldToUpdate, newValue] of Object.entries(toUpdate)) {
            user = await User.update({ userId, fieldToUpdate, newValue });
        }

        return user;
    }

    // 유저 정보 삭제
    static async deleteUser({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        const deleteUser = await User.delete({ userId });
        return deleteUser;
    }

    // 유저의 현재 포인트, 누적 포인트 불러오기
    static async getUserPoint({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        const getUserPoint = await User.getPoint({ userId });

        const userPoint = {
            id: getUserPoint.userId,
            currentPoint: getUserPoint.currentPoint,
            accuPoint: getUserPoint.accuPoint,
            successMessage: '유저의 포인트 현황 불러오기를 성공하셨습니다.',
            errorMessage: null,
        };

        return userPoint;
    }

    // 전체 유저 수 불러오기
    static async getUserCount({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        const getUserCount = await User.getCount({ userId });

        const userPoint = {
            userCount: getUserCount.userCount,
            successMessage: '전체 유저 수 불러오기를 성공하셨습니다.',
            errorMessage: null,
        };

        return userPoint;
    }
}

export { userAuthService };
