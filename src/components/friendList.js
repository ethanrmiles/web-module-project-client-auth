import React, { useEffect } from "react";

export default function FriendList (props) {
    const { getFriends } = props
    
    useEffect(() => {
        getFriends()
    }, [])

    return (
      <div className="friendList">
            <h2>Friend List:</h2>
            <p>Friend Name</p> 
            <p> Friend email</p>
      </div>
    )
}