import moment from "moment";
import React from "react";
import {BsTrash} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/expenses";


const Card = ({ item }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch =useDispatch();

  const hadleDelete = ()=>{
    dispatch(deleteExpense(item));
  }
  return (
    <div className="card-grand-parent">
        <div className="card-parent">
      <div className="card-left-area">
        <div className="cardimg">{item.category.icon}</div>
        <div className="card-info">
          <label className="card-title">{item.title}</label>
          <label className="card-time">{time}</label>
        </div>
      </div>
      <div className="card-right-area">
          
              <label className="card-amount">₹ {item.amount}</label>
              <div onClick={hadleDelete}>
          <BsTrash  className="delete-icon" />
          </div>
        
      </div>
      </div>
    </div>
  );
};

export default Card;
