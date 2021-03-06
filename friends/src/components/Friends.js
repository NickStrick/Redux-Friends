import React from 'react';
import Friend from './Friend';

const TodoList = props => {
    return (
        <div className="friendList">
            {props.friends.map(friend => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    deleteFriend={props.deleteFriend}
                    startUpdate={props.startUpdate}
                />
            ))}
        </div>
    );
};

export default TodoList;