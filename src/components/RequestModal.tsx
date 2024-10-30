// src/components/RequestModal.tsx

import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

interface RequestModalProps {
  closeModal: () => void;
  addTransaction: (amount: number) => void;
  balance: number;
}

const RequestModal: React.FC<RequestModalProps> = ({
  closeModal,
  addTransaction,
  balance,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAmount = Number(e.target.value);
    setAmount(enteredAmount);

    // Validation: check if the entered amount is greater than the balance
    if (enteredAmount > balance) {
      setError(`Amount exceeds available balance of $${balance}.`);
    } else {
      setError(null);
    }
  };

  const handleSubmit = () => {
    if (amount <= balance && amount > 0) {
      addTransaction(amount);
      setSuccessMessage(
        `You have requested $${amount}. It will be processed shortly.`
      );

      // Automatically close the modal after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
        closeModal();
      }, 1000);
    }
  };

  return (
    <Modal
      open={true}
      onClose={closeModal}
      aria-labelledby="request-modal-title"
      aria-describedby="request-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography id="request-modal-title" variant="h6">
          Request a Cash Advance
        </Typography>

        {successMessage ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : (
          <>
            <TextField
              type="number"
              label="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              error={Boolean(error)}
              helperText={error}
              fullWidth
              variant="outlined"
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              disabled={!!error || amount <= 0}
              fullWidth
            >
              Submit
            </Button>
          </>
        )}

        <Button
          onClick={closeModal}
          variant="outlined"
          color="secondary"
          fullWidth
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default RequestModal;
