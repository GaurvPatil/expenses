
import {FaBookMedical} from "react-icons/fa";
import {BsBook} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GiPayMoney, GiFoodTruck} from "react-icons/gi";
 

const Categories= [
    {
        id:11,
        title:"Education", 
        icon: <BsBook  className="category-icons"/> ,
        color:"blue"     
    },

    {
        id:12,
        title:"Healthcare", 
        icon: <FaBookMedical  className="category-icons"/> ,
        color:"green"     
    },

    {
        id:13,
        title:"Shopping", 
        icon: <AiOutlineShoppingCart  className="category-icons"/> ,
        color:"red"     
    },

    {
        id:14,
        title:"Food", 
        icon: <GiFoodTruck  className="category-icons"/> ,
        color:"purple"     
    },

    {
        id:15,
        title:"Other", 
        icon: <GiPayMoney  className="category-icons"/> ,
        color:"pink"     
    },
]

 
export default Categories;