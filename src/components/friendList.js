import React, { useEffect } from "react";

export default function FriendList (props) {
    const { getFriends, friends } = props
    useEffect(() => {
        getFriends()
    }, [])

    return (
      <div className="friendList">
            <h2>List of Friends</h2>
            {
                friends.map(friend => {
                    return (
                        <div className="article" key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                })
            } 
      </div>
    )
}