// src/components/CashAdvanceDashboard.tsx
import React from "react";
import TransactionList from "./TransactionList";
import RequestModal from "./RequestModal";

const CashAdvanceDashboard: React.FC = () => {
  const [balance, setBalance] = React.useState(350); // Mock balance value
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <h1>Cash Advance Dashboard</h1>
      <p>Available Balance: ${balance}</p>
      <button onClick={() => setIsModalOpen(true)}>
        Request a Cash Advance
      </button>
      {isModalOpen && <RequestModal closeModal={() => setIsModalOpen(false)} />}
      <TransactionList />
    </div>
  );
};

export default CashAdvanceDashboard;
