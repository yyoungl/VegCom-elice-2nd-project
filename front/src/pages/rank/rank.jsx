import React, { useEffect, useState, useContext } from 'react';
import * as Api from '../../../api';
import { UserStateContext } from '../../../App';
import Header from '../../sections/header';
import { useNavigate } from 'react-router-dom';

function Rank() {
    const userState = useContext(UserStateContext);
    const navigate = useNavigate();
    console.log(userState);
    useEffect(() => {
        if (!userState.user) {
            navigate('/');
            alert('로그인한 유저만 사용할 수 있습니다.');
        }
    });

    return <Header />;
}

export default Rank;
