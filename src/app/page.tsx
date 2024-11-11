// app/page.tsx

'use client';

import React from 'react';
import ExpensesList from '../components/expenses/expensesList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      <ExpensesList />
    </div>
  );
};

export default HomePage;
