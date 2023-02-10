import React, { useEffect, useState } from 'react'
import { Data } from '../../sub-components/Trending/Trending';

interface SideMenuProps {
  category: string;
}

export const SideMenu = ({ category }: SideMenuProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> setData(json))
  })
// change to list type
  return (
    <div>
      {data.map((item: Data) => {
        return (
          <div>
            {item.title}
          </div>
        )
      })}
    </div>
  )
}