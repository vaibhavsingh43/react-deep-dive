import { useState } from "react";
import Card from '../UI/Card'
//import './Expense.css'
const Expense = (props) =>{
  const [price,setPrice] = useState(props.price)
  const handleClick = () =>{
    setPrice(200)
  }
 return(
   <>
      
     <div className="expenses-container">
     <Card>  
     <h1>Expense</h1>
     </Card>
     <div className="expenses-list">

     <div className="expense-item">
       <div className="expense-title">{props.title}</div>
       <div className="expense-price">{price}</div>
       <button onClick={handleClick}>updatePrice</button>

       </div>
       </div>
     </div>
   </>
 )
}

export default Expense;