import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = { ...savedExpenseData, id: Math.random().toString() };
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
