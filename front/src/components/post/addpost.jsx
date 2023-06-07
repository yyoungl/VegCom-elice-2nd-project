import React, { useState, useContext, useEffect } from 'react';
import { UserStateContext } from '../../../App';

function AddPost({ post, postImage, userImage, postLike, postLikeCount, comment, like, isEditable }) {
    const userState = useContext(UserStateContext);

    // const handleSubmit = async e => {
    //     e.stopPropagation();

    //     await Api.post('/post', {
    //         post: {
    //             postId,
    //             userId,
    //             content,
    //             // public,
    //         },
    //         postImage: {
    //             postId,
    //             imageId,
    //             imageURL,
    //         },
    //     });

    //     setToday(convertTime(new Date()));

    //     const res = await Api.get('educationlist', userId);
    //     setEducations(res.data);
    //     setIsAdding(false);
    // };

    const navigate = useNavigate();

    useEffect(() => {
        if (!userState.user) {
            navigate('/');
        }
    });

    return (
        // 좋아요 버튼 만들고 댓글도 렌더링해야함..
        <div className="postCard rounded-lg mx-auto grid max-w-2xl grid-cols-1 border border-gray-300 pt-5 pl-5 pb-5 pr-5 mb-5">
            <article key={post.postId} className="flex max-w-xl flex-col items-start justify-between">
                <div className="profileSection relative flex items-center gap-x-4">
                    <img src={post.userImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div style={{ display: 'flex', verticalAlign: 'middle' }}>{post.userId}</div>
                </div>
                <div className="postSection w-full">
                    <img src={post.postImage} alt="Post Image" className="postImage w-full h-auto mt-5" />
                    <div className="flex mt-3">
                        {like == true ? <SolidStarIcon className="h-7 w-7" fill="#008762" /> : <StarIcon className="h-7 w-7" />}
                        <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" onClick={() => navigate('/rank/list')} />
                    </div>
                    <div className="text-left mt-3">{post.postLikeCount.toLocaleString()} 명이 좋아합니다.</div>
                    <div className="flex mt-2 text-md text-left">
                        <span style={{ fontWeight: 'bold', marginRight: '0.4rem' }}>{post.userId}</span> {post.content}
                    </div>
                </div>
            </article>
        </div>
    );
}

export default AddPost;