import { useState } from "react";

export const FriendAdd = ({ onUpdateFriendList }) => {
    const [friendName, setFriendName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFriendNameChange = (e) => {
        setFriendName(e.target.value);
    }

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    const handleFriendAdd = (e) => {
        e.preventDefault();
        if (friendName === '' || imageUrl === '')
            return;

        let addedFriend = {
            name: friendName,
            image: imageUrl,
            balance: 0,
            id: Date.now()
        };

        onUpdateFriendList(addedFriend);
    }

    return (
        <form className="form-add-friend" onSubmit={handleFriendAdd}>
            <label>Friend Name 🧑‍🤝‍🧑</label>
            <input type="text" placeholder="Friends name" onChange={handleFriendNameChange} />
            <label>Image URL 📷</label>
            <input type="text" placeholder="Image URL" onChange={handleImageUrlChange} />
            <button className="button" type='submit'>Add Friend</button>
        </form>)
}