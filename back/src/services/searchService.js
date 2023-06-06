import { User, Search } from '../db/index.js';
import errors from '../../errors.js';

class searchService {
    static async getPost({ userId, keyword }) {
        const user = await User.findById({ userId });

        if (!user) {
            throw errors.UserNotFoundId;
        }

        const selectComment = await Search.select({ keyword });

        return selectComment;
    }
}

export { searchService };
