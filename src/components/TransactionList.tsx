// src/components/TransactionList.tsx
import React from "react";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  status: "Pending" | "Completed";
}

const transactions: Transaction[] = [
  { id: 1, date: "2024-10-29", amount: 100, status: "Completed" },
  { id: 2, date: "2024-10-28", amount: 50, status: "Pending" },
  // Add more mock transactions here
];

const TransactionList: React.FC = () => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date}: ${transaction.amount} - {transaction.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
