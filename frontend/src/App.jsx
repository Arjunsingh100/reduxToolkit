import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import CartProduct from './Pages/CartProduct'
function App() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
     try {
      const response = await fetch('https://fakestoreapi.com/products',{
        method:'GET',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          'Content-Type': 'application/json'
        }
      })
      if(response.ok){
        const data = await response.json();
        console.log(data)
        setProducts(data)
      }
     } catch (error) {
      console.log(error)
     }
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <>
      <div style={{width:'100vw',overflowX:'hidden'}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home products={products} />}/>
          <Route path='/cart' element={<CartProduct />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
