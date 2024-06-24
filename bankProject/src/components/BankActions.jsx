// src/components/BankActions.js
import  { useState } from "react";

const BankActions = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDeposit = () => {
    onDeposit(parseFloat(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    onWithdraw(parseFloat(amount));
    setAmount("");
  };

  return (
    <div className="bank-actions">
      <h2>Bank Actions</h2>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default BankActions;
