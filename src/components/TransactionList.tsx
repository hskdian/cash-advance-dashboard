// src/components/TransactionList.tsx

import React, { useState } from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tooltip,
} from "@mui/material";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  status: "Pending" | "Completed";
  type: "Advanced" | "Repaid";
  repaymentDate: string; // Repayment date
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [filter, setFilter] = useState<"All" | "Pending" | "Completed">("All");

  const filteredTransactions = transactions.filter((transaction) =>
    filter === "All" ? true : transaction.status === filter
  );

  const sortedTransactions = filteredTransactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayedTransactions = sortedTransactions.slice(0, 5);

  return (
    <Paper elevation={3} sx={{ padding: "1rem", marginTop: "2rem" }}>
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>

      <ButtonGroup variant="outlined" sx={{ marginBottom: "1rem" }}>
        <Button
          onClick={() => setFilter("All")}
          variant={filter === "All" ? "contained" : "outlined"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("Pending")}
          variant={filter === "Pending" ? "contained" : "outlined"}
        >
          Pending
        </Button>
        <Button
          onClick={() => setFilter("Completed")}
          variant={filter === "Completed" ? "contained" : "outlined"}
        >
          Completed
        </Button>
      </ButtonGroup>

      <List>
        {displayedTransactions.map((transaction) => (
          <ListItem key={transaction.id} divider>
            <Tooltip
              title={
                <>
                  <div>Transaction ID: {transaction.id}</div>
                  {transaction.repaymentDate !== "N/A" && (
                    <div>Repayment Date: {transaction.repaymentDate}</div>
                  )}
                </>
              }
              arrow
              placement="right"
            >
              <ListItemText
                primary={`Date: ${transaction.date}`}
                secondary={
                  <Typography component="span" variant="body2">
                    {transaction.type}: ${transaction.amount} | Status:{" "}
                    {transaction.status}
                  </Typography>
                }
              />
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionList;
