import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';
import Card from './Components/Card';
import Header from './Home/Header';
import Layout from './Home/Layout';

function App() {
  const [data, setData] = useState([])

    const fetchProductsData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setData(actualData);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
    fetchProductsData()
  },[])

  return (
    <>
    
    {/* { data&&data ?.map((data)=>{

     return <Card data={data} />
    })

    } */}
    <Header/>
    <Layout/>
    </>
  )
}

export default App
