import { User } from '../db/index.js';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthService {
    static async getUser({ email, password }) {
        const user = await User.findByEmail({ email });

        // 이메일 검증
        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        // 비밀번호 확인
        const correctPasswordHash = user.password;
        // const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash);
        const isPasswordCorrect = password == correctPasswordHash;
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
            errorMessage: null,
        };

        return loginUser;
    }

    static async getUserInfo({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            const errorMessage = '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        return user;
    }
    // 유저 생성    
    static async createUser({email, password, nickname}) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          email,
          password: hashedPassword,
          nickname,
        });
    }

    static async checkDuplicate ({email}) {
        const result = await User.findByEmail({ email });
        return result
      };
      
}

export { userAuthService };