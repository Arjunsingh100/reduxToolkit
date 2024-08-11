import {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,setCarts } from '../../store/cartSlice';
import { fetchProducts } from '../../store/productSlice';
const Products = () => {
  const { data: products, status } = useSelector((state) => { return state.products })
  const dispatch = useDispatch();
  const storeCarts = useSelector((state) => state.cart);

  const handleAddCart = (product) => {
    console.log(product)
    dispatch(addCart(product))
  }

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  useEffect(()=>{
    const carts = localStorage.getItem('cart');
    const cartsData = JSON.parse(carts);
    dispatch(setCarts(cartsData))
    console.log(JSON.parse(carts))
  },[])
  if (status == 'loading') {
    return (
      <h2>Loading...</h2>
    )
  }
  if (status == 'error') {
    return (
      <h2>Something wend wrong while fetching Products</h2>
    )
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '15px' }}>{
      products?.map((product, index) => {
        return (
          <div key={index} style={{ width: '200px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid gray' }}>
            <img src={product.image} />
            <h4>{product.price}</h4>
            <button onClick={() => { handleAddCart(product) }}>Add to cart</button>
          </div>
        )
      })
    }</div>
  )
}

export default Products
