import React, { useState, useContext, useEffect } from 'react';
import * as Api from '../../../api';
// import Navigator from '../../sections/navigator';
import Header from '../../sections/header';
import UserCard from '../../components/usercard/usercard';
import { UserStateContext } from '../../../App';
import { useNavigate, useParams } from "react-router-dom";


function Rank() {

    const navigate = useNavigate();
    const userState = useContext(UserStateContext);
    // const [users, setUsers] = useState([])
    const [users, setUsers] = useState([
        {
            id: 1,
            image: "http://placekitten.com/200/200",
            ranking: 1,
            feedCount: 10,
            co2Decre: 20,
        },
        {
            id: 2,
            image: "http://placekitten.com/200/200",
            ranking: 2,
            feedCount: 5,
            co2Decre: 10,
        },
        {
            id: 3,
            image: "http://placekitten.com/200/200",
            ranking: 2,
            feedCount: 5,
            co2Decre: 10,
        }
        // Add more users as needed
    ]);
    

    // useEffect(() => {
    //     if (!userState.user) {
    //         navigate("/login")
    //         return;
    //     }
    //     Api.get("/rank/list").then((res) => setUsers(res.data));
    // }, [userState, navigate])

    return(
        <>
            <Header />
            <div className="w-full">
                {users.map((user) => (
                    <div key={user.id}>
                        <UserCard user={user}/>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Rank;
