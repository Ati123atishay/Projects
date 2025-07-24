import { useEffect, useState } from "react";
import Web_service from "../Service/Web_service";
import Web_Api from "../Service/Web_Api";
import { useDispatch } from "react-redux";
import { addCartData } from "../Redux/Slice";





function Home() {
  const dispatch = useDispatch()
   const [product,setProduct] = useState([])
 
   useEffect(()=>{
    loadProduct(); //call
 },[])

 var loadProduct = async()=>{
    var resp = await Web_service.getAPICall(Web_Api.productAPI)
    setProduct(resp.data.products)
    console.log(resp.data.products);
    

 }
 return <><div className="container">
       <h1 style={{textAlign:'center',color:'red'}}> Home Component called...</h1>
       <div className="row">
         {product.map((pData,i)=>{
            return <div className="col-md-4 well"style={{flex:"display",justifyContent:'space-between'}} key={i}>
               <p> <img src={pData.thumbnail} height={100} width={100}/> </p>
               <div>
            <b>Name : {pData.title}</b><br/><br/>
            <b>Category : {pData.category}</b><br/><br/>
            <b>Price : {pData.price}</b><br/><br/>
            <b>Rating : {pData.rating}</b><br/><br/>
            <b>Discount %: {pData.disconuntPercentage}</b><br/><br/>
            <button className="btn btn-success" onClick={()=>dispatch(addCartData(pData))}>Add to Cart</button>
         </div>
            </div>
            
         
         })}
         
       </div>

    
 </div>
  
 </>
}

export default Home