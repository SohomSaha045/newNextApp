"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);
  const [load,setload]=useState(false);
  useEffect( ()=>{
    const get=async ()=>{
        let data=await fetch("https://dummyjson.com/products");
        data=await data.json();
        setProduct(data.products);
    }
   get();

  },[])


  return (
    <div>
      <h1>Page</h1>
      { 
        product.map((item)=>(
            <div>
            <h2>Product: {item.title}</h2>
            <h3>Price: $ {item.price}</h3>
            <br></br>

            </div>
        ))
      }
    </div>)
}
