import { useState } from "react";
import Categories from "./categories";
import Products from "./products";

export default function Home(){

    const [selectedCategory,setSelectedCategory]=useState(null);

    const handleCategoryClick=(category)=>{
        setSelectedCategory(category);
        console.log(category);
    }

    return(
        <div>
            <Categories onCategoryClick={handleCategoryClick}/>
            <Products selectedCategory={selectedCategory}/>
        </div>
    )
}