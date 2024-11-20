'use client';

import React from 'react';
import { useGetExpensesQuery } from '../../graphql/generated/graphql';

const ExpensesList: React.FC = () => {

  const { data, loading, error } = useGetExpensesQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
console.log({data})
  return (
    <div>
      <h2>Expenses test</h2>
      {data?.expenses.map((expense) => (
        <div key={expense.id}>{expense.description}</div>
      ))}
    </div>
    
  );
};

export default ExpensesList;
