// src/components/CashAdvanceDashboard.tsx

import React from "react";
import TransactionList from "./TransactionList";
import RequestModal from "./RequestModal";
import { Container, Typography, Button, Box } from "@mui/material";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  status: "Pending" | "Completed";
}

const CashAdvanceDashboard: React.FC = () => {
  const [balance, setBalance] = React.useState(350); // Mock balance value
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [transactions, setTransactions] = React.useState<Transaction[]>([
    { id: 1, date: "2024-10-01", amount: 100, status: "Completed" },
    { id: 2, date: "2024-10-15", amount: 50, status: "Pending" },
    { id: 3, date: "2024-10-20", amount: 75, status: "Completed" },
  ]);

  const handleAddTransaction = (amount: number) => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD
      amount,
      status: "Pending",
    };
    setTransactions([...transactions, newTransaction]);
    setBalance(balance - amount);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Cash Advance Dashboard
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Available Balance: ${balance}
      </Typography>

      <Box sx={{ my: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Request a Cash Advance
        </Button>
      </Box>

      {isModalOpen && (
        <RequestModal
          balance={balance}
          addTransaction={handleAddTransaction}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      <TransactionList transactions={transactions} />
    </Container>
  );
};

export default CashAdvanceDashboard;
