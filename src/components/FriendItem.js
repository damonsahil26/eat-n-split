export const FriendItem = ({ friend, onSelectedFriend, toggleBillForm, handleBillForm }) => {
    const isSomeOwed = friend.balance < 0;
    const handleSelectFriend = (e) => {
        onSelectedFriend(friend);
        if (toggleBillForm)
            handleBillForm();
    }
    return <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p className={isSomeOwed ? 'red' : friend.balance === 0 ? '' : 'green'}>
            {isSomeOwed ? `You owe ${friend.name} $ ${-friend.balance}`
                : `You are owed by ${friend.name} $ ${friend.balance}`}</p>
        <button className="button" onClick={handleSelectFriend}>{toggleBillForm ? 'Close' : 'Select'} </button>
    </li>
}