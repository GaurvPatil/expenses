import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";

const Topfold = () => {
  return (
    <div className="topfold">
      <div className="home-topfold">
        <div className="searchdiv">
          <AiOutlineSearch className="search-icon" />
          <input placeholder="search for expenses" className="searchbar"  />
        </div>
       <Link to="/addexpense">
        <button>
          <GrFormAdd className="plus-icon"/>
          Add{" "}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Topfold;
