// components/ExpensesList.tsx

'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXPENSES } from '../../graphql/queries';
// import { GetExpensesData, Expense } from '../graphql/types/expenses';

const ExpensesList: React.FC = () => {
  const { loading, error, data } = useQuery<any>(GET_EXPENSES);

  if (loading) return <p>Loading expenses...</p>;
  if (error) return <p>Error loading expenses: {error.message}</p>;

  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data?.expenses.map((expense: any) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.description || 'N/A'}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
