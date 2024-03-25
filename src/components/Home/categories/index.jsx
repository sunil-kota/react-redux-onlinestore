import axios from "axios";
import { useEffect, useState } from "react";
import './index.css';

export default function Categories({onCategoryClick}){
    const [categories, setCategories]=useState([]);

    const handleClick=(category)=>{
      if(onCategoryClick){
        onCategoryClick(category);
      }
      console.log(category);
    }

    const fetchCategories = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products/categories');
          setCategories(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(()=>{fetchCategories()},[]);

    return(
        <div className="categories">
            {
                categories.map((category)=>(<div key={category} 
                onClick={()=>handleClick(category)}>{category}</div>))
            }
        </div>
    )
}