import { useState } from 'react';
import './App.css';
import { FriendList } from './components/FriendsList';
import { SplitBill } from './components/SplitBill';
import { initialFriends } from '../src/InitialFriends';

function App() {
  const [friendsList, setFriendsList] = useState([...initialFriends]);
  const [selectedFriend, setSelectedFriend] = useState('');
  const [toggleBillForm, setToggleBillForm] = useState(false);

  const handleSelectedFriend = (selectedFriend) => {
    setSelectedFriend(selectedFriend);
    setToggleBillForm(true);
  }

  const updateFriendList = (newFriend) => {
    setFriendsList(friendsList => [...friendsList, newFriend]);
  }

  const handleBalanceAmount = (balance) => {
    setFriendsList(friendsList => friendsList.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: balance }
        : friend))
  }

  const handleBillForm = () => {
    setToggleBillForm(false);
  }

  return (
    <div className="App">
      <FriendList friendsList={friendsList} onUpdateFriendList={updateFriendList} onSelectedFriend={handleSelectedFriend} toggleBillForm={toggleBillForm} handleBillForm={handleBillForm} />
      {toggleBillForm && <SplitBill selectedFriend={selectedFriend} onHandleBalanceAmount={handleBalanceAmount} onHandleBillForm={handleBillForm} />}
    </div>
  );
}

export default App;
