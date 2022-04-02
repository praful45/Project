import { useState } from 'react';
import './App.css';
import Expenses from './ExpenseTracker/Expenses/Expenses';
import NewExpense from './ExpenseTracker/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseData, setExpenseData] = useState(expenses)

  const finalData = (data) => {
    setExpenseData(prev => {
      return [
        ...prev,
        data
      ]
    })
  }

  return (
    <div>
      <NewExpense finalData={finalData} />
      <Expenses items={expenseData} />
    </div>)
}

export default App;
