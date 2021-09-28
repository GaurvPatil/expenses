import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import shortid from 'shortid'

const Expenselist = () => {
const { expenseList:list} = useSelector(state=>state.expenses)

    return (
        <div className="expense-list">
         {
          list.length ? list.map((item)=>{
              return( <Card item={item} key={shortid.generate()}/>)
          }) : <div>
               <img src="https://cdn.pixabay.com/photo/2017/06/07/18/35/design-2381160_960_720.png" alt="Add expenses img" className="emptylistimg"/>
               <label><h2>Uh oh! your expense list is empty</h2> </label>
             </div>
}
        </div>
    )
}

export default Expenselist;
