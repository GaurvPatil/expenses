import React from "react";
import { useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Categories from "../Categories";
import { addExpense } from "../redux/actions/expenses";
import Modal from "./Modal";

const Addform = () => {
  const cat = Categories;
  const [modal, SetModal] = useState(false);
  const [categoryOpen, setCategoryClose] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      //check number or not
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (item) => {
    setCategory(item);
    setCategoryClose(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      alert("Please enter valid data");
      return;
    } else {
      SetModal(true);

      let data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };
      dispatch(addExpense(data));
    }
  };

  return (
    <>
      {modal ? (
        <Modal
          SetModal={SetModal}
          setTitle={setTitle}
          setAmount={setAmount}
          setCategory={setCategory}
        />
      ) : (
        <section>
          <div className="addform">
            <div className="form-title">
              <label htmlFor="title"> Title</label>
              <input
                id="title"
                placeholder="name of expenditure"
                value={title}
                onChange={handelTitle}
              />
            </div>
            <div className="form-amount">
              <label htmlFor="amount">Amount ₹</label>
              <input
                id="amount"
                placeholder="enter amount ₹"
                value={amount}
                onChange={handleAmount}
              />
            </div>
            <div className="form-category-parent">
              <div
                className="category-head"
                onClick={() => {
                  setCategoryClose(!categoryOpen);
                }}
              >
                <label>{category ? category.title : "Category"}</label>
                {categoryOpen ? (
                  <IoIosArrowDropup className="arrow" />
                ) : (
                  <AiOutlineDownCircle className="arrow" />
                )}
              </div>
              <div className="category-drop">
                {categoryOpen &&
                  cat.map((item, index) => {
                    return (
                      <div
                        className="category-container"
                        key={index}
                        style={{ borderRight: `2px solid ${item.color}` }}
                        onClick={() => handleCategory(item)}
                      >
                        <label>{item.title}</label>
                        <div>{item.icon}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="plane">
            <button onClick={handleSubmit}>
              Add <RiSendPlaneLine className="plane-icon" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Addform;
