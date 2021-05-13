import React, {useState} from 'react' // useState is for refreshing the class itself so you can update some value you may want to
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) =>{
  // this code below is a deconstructed array which gets useState(props.tile) and sets in the title which later will receive a new value by setTitle() that is nested in clickHandler() 
  const [title, setTitle] = useState(props.title)
  const clickHandler = () =>{
    setTitle('Updated!')
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;