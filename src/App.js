import React, { useState } from 'react'
import NewExpense from './components/NewExpenses/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) },
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
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  /*
  this code representes exactly the as as the one commented below  
  except that this code is used in the past for old version of react
  and also you have to import React from 'react' in every js file.
  */
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {} ,"Let's do it"),
  //   React.createElement(NewExpense,{}),
  //   React.createElement(Expenses,{items: expenses})
  // )
  return(
  <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
  </div>
  )
}

export default App;
