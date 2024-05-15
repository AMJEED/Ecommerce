import React from 'react'
import  { Grid} from '@material-ui/core'
import Product from './Product'
import  { useState, useEffect } from 'react';
import axios from 'axios';

function Products({setcart}) {
  const [data, setData] = useState([]);

useEffect(() => {
  console.log(process.env.REACT_APP_API_URL); // Logging the base URL
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
      console.log("aksj",response); // Logging the response

      setData(response.data);
      console.log(response); // Logging the response
    } catch (error) {
      console.error('Failed to fetch data:', error); // Error handling
    }
  };

  fetchData();
}, []);
  
  return (
    < >
        <Grid container justify='center' spacing={4}>
            {data.map((product)=>(  <Grid item  key={product.id}  xs={12} sm= {6} md = {4} lg = {2}>
                    <Product product={product}></Product>
                </Grid>)
              
              
            )}

        </Grid>
    </>
      

  )
}

export default Products
