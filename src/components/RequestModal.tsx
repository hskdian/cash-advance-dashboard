// src/components/RequestModal.tsx
import React from "react";

interface RequestModalProps {
  closeModal: () => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ closeModal }) => {
  const [amount, setAmount] = React.useState<number | "">("");

  const handleRequest = () => {
    // Handle the request logic (e.g., validate and submit)
    alert(`You requested $${amount}`);
    closeModal();
  };

  return (
    <div>
      <h3>Request Cash Advance</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={handleRequest}>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default RequestModal;
