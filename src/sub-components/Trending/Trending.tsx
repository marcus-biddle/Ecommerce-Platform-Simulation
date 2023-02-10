import React, { useEffect, useState } from 'react'
import './style.css'

export interface Data {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}


export const Trending = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=> setData(json));
    })

  return (
    <>
        <div className='trending'>
            {data.map((item: Data) => {
                return (
                    <>
                    <div className='item'  key={item.id} >
                        <img className='circle-img' src={item.image} />
                        <div className='category-container'>
                        <span>{item.category}</span>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </>
  )
}