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
} from "@mui/material";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  status: "Pending" | "Completed";
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [filter, setFilter] = useState<"All" | "Pending" | "Completed">("All");

  const filteredTransactions = transactions.filter((transaction) =>
    filter === "All" ? true : transaction.status === filter
  );

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
        {filteredTransactions.map((transaction) => (
          <ListItem key={transaction.id} divider>
            <ListItemText
              primary={`Date: ${transaction.date}`}
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    Amount: ${transaction.amount}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color={
                      transaction.status === "Completed"
                        ? "primary"
                        : "textSecondary"
                    }
                  >
                    Status: {transaction.status}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionList;
