// src/components/AccountSummary.js


const AccountSummary = ({ balance, transactions }) => {
  return (
    <div className="account-summary">
      <h2>Account Summary</h2>
      <p>
        <strong>Balance:</strong> ${balance.toFixed(2)}
      </p>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} of ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSummary;
