import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center justify-center p-4 m-2 bg-white shadow-2xl rounded-xl" style = {{ width:  '60vh' }}>
      <div className="flex flex-row justify-center items-center space-x-4 text-left">
        <p className="text-lg font-bold">{user.id}</p>
        <img className="w-20 h-20 object-cover rounded-full" src={user.image} alt={user.id}/>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{user.ranking}</p>
          <p className="text-sm text-gray-500">{user.feedCount}</p>
          <p className="text-sm text-gray-500">{user.co2Decre}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;




