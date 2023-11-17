import { useState } from "react"
import { FriendAdd } from "./FriendAdd"
import { FriendItem } from "./FriendItem"

export const FriendList = ({ friendsList, onUpdateFriendList, onSelectedFriend, toggleBillForm, handleBillForm }) => {

    const [isFriendFormOpen, setFriendFormOpen] = useState(false);
    const handleShowFriendForm = () => {
        setFriendFormOpen((isFriendFormOpen) => !isFriendFormOpen);
    }

    return <div className="sidebar">
        <ul>
            {
                friendsList.map((friend) => (
                    <FriendItem friend={friend}
                        key={friend.id}
                        onSelectedFriend={onSelectedFriend}
                        toggleBillForm={toggleBillForm}
                        handleBillForm={handleBillForm} />
                ))
            }
        </ul>
        {isFriendFormOpen && <FriendAdd onUpdateFriendList={onUpdateFriendList} />}
        <button className="button" onClick={handleShowFriendForm}>{isFriendFormOpen ? 'Close' : 'Add Friend'}</button>
    </div>
}