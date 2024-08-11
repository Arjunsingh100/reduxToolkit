import {React,useEffect,useState} from 'react'
import { removeCart,setCarts } from '../../store/cartSlice.js'
import { useDispatch,useSelector } from 'react-redux'
const CartProduct = () => {
  const dispatch = useDispatch();
  const storeCarts = useSelector((state) => state.cart);
  const handleRemoveCart = (product) => {
    dispatch(removeCart(product));
  }
  
  return (
    <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',gap:'15px'}}>{
      storeCarts?.map((product,index)=>{
          return(
              <div key={index} style={{width:'200px',height:'250px',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',border:'1px solid gray'}}>
                  <img src={product.image}/>
                  <h4>{product.price}</h4>
                  <button onClick={()=>{handleRemoveCart(product)}}>Remove</button>
              </div>
          )
      })
      }</div>
  )
}

export default CartProduct
