import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const getFormattedDate = (option) => props.date.toLocaleString('en-US', option);
  const year = props.date.getFullYear();

  return (
    <div className="expense-date ">
      <div className="expense-date__month">{getFormattedDate({ month: 'long' })}</div>
      <div className="expense-date__day">{getFormattedDate({ day: '2-digit' })}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;