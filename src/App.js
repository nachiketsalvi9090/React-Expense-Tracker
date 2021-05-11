import { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const dummyExpenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 7,
      date: new Date(2020, 3, 21),
    },
    {
      id: 'e2',
      title: 'House Rent',
      amount: 50,
      date: new Date(2021, 3, 2),
    },
    {
      id: 'e3',
      title: 'Wi-fi',
      amount: 700,
      date: new Date(2021, 2, 7),
    },
    {
      id: 'e4',
      title: 'Grocery',
      amount: 3040,
      date: new Date(2022, 3, 1),
    },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
