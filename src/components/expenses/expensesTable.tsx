'use client';

import React, { useState, useEffect } from 'react';
import {
  useGetExpensesQuery,
  GetExpensesQuery,
} from '../../graphql/generated/graphql';
import {
  getCoreRowModel,
  createColumnHelper,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';

const ExpensesTable: React.FC = () => {
  const { data, loading, error } = useGetExpensesQuery();

  // Correctly typed table data state
  const [tableData, setTableData] = useState<GetExpensesQuery['expenses']>([]);

  // Update table data when query result changes
  useEffect(() => {
    if (data?.expenses) {
      setTableData(data.expenses);
    }
  }, [data]);

  const columnHelper = createColumnHelper<GetExpensesQuery['expenses'][0]>();

  // Define columns for the table
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: (info) => info.getValue() ?? 'No Description',
    }),
    columnHelper.accessor('amount', {
      header: 'Amount',
      cell: (info) => `$${info.getValue().toFixed(2)}`,
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor('category.name', {
      header: 'Category',
    }),
  ];

  // Create table instance
  const table = useReactTable({
    data: tableData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
<div className="p-4">
  <h2 className="text-2xl font-bold mb-4">Expenses</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-gray-300">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-2 text-left font-medium text-white"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="bg-black border-b border-gray-200"
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-4 py-2 text-gray-600 text-sm whitespace-nowrap"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default ExpensesTable;
