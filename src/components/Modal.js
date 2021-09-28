import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

const Modal = ({SetModal,setTitle,setAmount,setCategory}) => {
  const { expenseList: expense } = useSelector((state) => state.expenses);
  const modalInfo = expense.length - 1;
  return (
    <div className="modal-parent">
      <h1 className="modal-head">Expense Added Succesfully</h1>
      <div className="modal-info">
        <h1> Title: {expense[modalInfo].title}</h1>
        <h1> Amount: {expense[modalInfo].amount}</h1>
        <h1 className="cath1">
          {" "}
          Category: {expense[modalInfo].category.title}{" "}
          {expense[modalInfo].category.icon}
        </h1>
      </div>
      <div className="modal-icons">
        <Link to="/addexpense" className="addicon" onClick={()=>{
            SetModal(false);
            setTitle("");
            setAmount("");
            setCategory(); 
        }}>
          Add More &nbsp; <IoMdAddCircleOutline />
        </Link>
        <Link to="/">
          <BiHomeAlt className="homeicon" />
        </Link>
      </div>
    </div>
  );
};

export default Modal;
