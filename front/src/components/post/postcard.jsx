import React, { useState, useContext, useEffect } from 'react';
import { UserStateContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { StarIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

function PostCard({ post, postImage, userImage, postLike, postLikeCount, comment, like, isEditable }) {
    const userState = useContext(UserStateContext);

    // const handleClick = () => {
    //     navigate(`/story/${post.postId}`);
    // };

    const navigate = useNavigate();

    useEffect(() => {
        if (!userState.user) {
            navigate('/rank/list');
        }
    });

    return (
        // 좋아요 버튼 만들고 댓글도 렌더링해야함..
        <div className="postCard rounded-lg mx-auto grid max-w-2xl grid-cols-1 border border-gray-300 pt-5 pl-5 pb-5 pr-5 mb-5">
            <article key={post.postId} className="flex max-w-xl flex-col items-start justify-between">
                <div className="relative flex items-center gap-x-4">
                    <img src={post.userImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div style={{ display: 'flex', verticalAlign: 'middle' }}>{post.userId}</div>
                </div>
                <div className="w-full">
                    <img src={post.postImage} alt="Post Image" className="w-full h-auto mt-5" />
                    <div className="flex mt-3">
                        {like === true ? <StarIcon className="h-7 w-7" filll="008762" /> : <StarIcon className="h-7 w-7" />}
                        <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-left">{post.content}</p>
                </div>
                <a onClick={() => navigate('/rank/list')}>자세히 보기!! 일단은 rank페이지로 보냅니다</a>
            </article>
        </div>
    );
}

export default PostCard;
