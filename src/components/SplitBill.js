import { useState } from "react"

export const SplitBill = ({ selectedFriend, onHandleBalanceAmount, onHandleBillForm }) => {
    const [bill, setBill] = useState(0);
    const [myExpense, setMyExpense] = useState(0);
    const [paidBy, setPaidBy] = useState('You');
    let friendExpense = bill - myExpense;

    const handleSplitBill = (e) => {
        e.preventDefault();

        if (bill === 0 || myExpense === 0)
            return;

        let balance = (paidBy !== 'You') ? (- myExpense) : (friendExpense);
        onHandleBalanceAmount(balance);
        setBill(0);
        setMyExpense(0);
        onHandleBillForm();
    }

    return (
        <form className="form-split-bill" onSubmit={handleSplitBill}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                onChange={(e) => setBill(e.target.value)}
                value={bill}
            />

            <label>🧍‍♀️ Your expense</label>
            <input
                type="text"
                onChange={(e) => setMyExpense(e.target.value)}
                value={myExpense}
            />

            <label>👫{selectedFriend.name}'s expense</label>
            <input type="text" disabled value={friendExpense} />

            <label>🤑 Who is paying the bill</label>
            <select onChange={(e) => setPaidBy(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">Split bill</button>
        </form>
    )
}