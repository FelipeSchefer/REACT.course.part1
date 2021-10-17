import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  /** 
   *  There are 2 ways of setting values to the inputs in the form one is like this code below
   *  which starts with an empty string and then that is involked by a handler function which 
   *  updates the setVariable 
   * */
  const [enteredTitle,  setEnteredTitle ] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate,   setEnteredData  ] = useState('')

  /**
   * Similarly to the code above this desconstructed array isn't receiving an empty string but an object
   * which contains empty string variables 
   */
  // const [userInput, setUserInput] = useState({
  //   enteredTitle:  '',
  //   enteredAmount: '',
  //   enteredDate:   ''
  // })

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value) // this is related to the code in the line 11

    // setUserInput({                      // in this way, you sometimes got a error because it depends of the userInput which sometimes can be not up to date  
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // setUserInput((prevState) =>{            // in the other hand this piece of code doesn't have a problem being not up to date
    //   return { 
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   }
    // })
  }

  const amountChangeHandler = event =>{
    setEnteredAmount(event.target.value) // this is related to the code in the line 12
   
    // setUserInput({                       // in this way, you sometimes got a error because it depends of the userInput which sometimes can be not up to date  
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    // setUserInput((prevState) =>{            // in the other hand this piece of code doesn't have a problem being not up to date
    //   return {  
    //     ...prevState,
    //     enteredAmount: event.target.value 
    //   }
    // })
  }

  const dateChangeHandler = event =>{
    setEnteredData(event.target.value) // this is related to the code in the line 13

    // setUserInput({                     // in this way, you sometimes got a error because it depends of the userInput which sometimes can be not up to date  
    //   ...userInput,
    //   setUserInput: event.target.value
    // })
  }

  const submitHandler = (event) =>{
    event.preventDefault()

    const expenseData ={
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
   
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredData('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            value={enteredAmount}
            min='0.01' step='0.01' 
            onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type='date'
            value={enteredDate}
            min='2019-01-01' max='2022-12-31'
            onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;