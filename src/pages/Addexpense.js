import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Addform from "../components/Addform";




const Addexpense = () => {
  
  useEffect(()=>{
    window.scroll(0,0)
    },[])


  return (
    <div className="addexpensediv">
      <div className="addexpense">
        <div className="topaddexpesnse">
          <Link to="/">
            <IoIosArrowBack />
            Back
          </Link>
          <Link to="/">
            <MdCancel />
            cancel
          </Link>
        </div>
        <Addform />
      </div>
    </div>
  );
};

export default Addexpense;
