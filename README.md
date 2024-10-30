# Cash Advance Dashboard

## Overview

The Cash Advance Dashboard is a React application that allows users to request cash advances and view their transaction history. Users can filter transactions by status (Pending or Completed) and view additional details by hovering over transaction entries.

## Features

- Request cash advances
- View transaction history
- Filter transactions by status (All, Pending, Completed)
- Display recent transactions in reverse chronological order
- Tooltips for additional transaction details (e.g., Transaction ID, Repayment Date)

## Technologies Used

- React
- TypeScript
- Material-UI (MUI)
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version >= 14.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/cash-advance-dashboard.git
   cd cash-advance-dashboard

   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will start the app in development mode. Open http://localhost:3000 to view it in your browser.

## Usage

- Click the "Request a Cash Advance" button to open the modal and enter the amount for the cash advance.
- View recent transactions in the list below, and use the filter buttons to change the displayed status.
- Hover over transaction entries to see additional details.

## Thoughts

I bootstrapped the project in TypeScript quite early but implemented MUI much too late. By the time I considered adding tooltips, several components were already built. Starting with the UI library for building components would have saved a lot of time on styling. Additionally, I haven't spent much time on sorting the transactions, particularly for cases where multiple cash advances are requested on the same day.
