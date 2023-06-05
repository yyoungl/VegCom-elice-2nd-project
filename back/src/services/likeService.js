import { User, Like } from '../db/index.js';
import errors from '../../errors.js';

class likeService {
    static async getRankList({ userId }) {
        const user = await User.findById({ userId });

        if (!user) {
            throw errors.UserNotFoundId;
        }

        const rankList = await Like.getRankList();

        return rankList;
    }
}

export { rankService };

   

