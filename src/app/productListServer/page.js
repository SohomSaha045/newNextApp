
const pList=async()=>{
    let data=await fetch("https://dummyjson.com/products");
    data=await data.json();
    return data.products;
}
export default async function Page() {
  let product=await pList();
  console.log(product);
  return (
    <div>
      <h1>Product List Server</h1>
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
