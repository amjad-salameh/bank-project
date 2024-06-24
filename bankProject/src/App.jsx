// src/App.js
import  { useState } from "react";
import UserProfile from "./components/UserProfile";
import BankActions from "./components/BankActions";
import AccountSummary from "./components/AccountSummary";
import "./App.css";

const App = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
    setTransactions([...transactions, { type: "Deposit", amount }]);
  };

  const handleWithdraw = (amount) => {
    if (amount <= balance) {
      setBalance(balance - amount);
      setTransactions([...transactions, { type: "Withdraw", amount }]);
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <div className="App">
      <h1>Bank Account</h1>
      <UserProfile user={user} />
      <BankActions onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
      <AccountSummary balance={balance} transactions={transactions} />
    </div>
  );
};

export default App;
