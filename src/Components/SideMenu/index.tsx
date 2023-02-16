import React, { useEffect, useState } from 'react'
import { Data } from '../../sub-components/Trending/Trending';
import { MenuHeader, MenuOptionWrapper, MenuStyle, MenuUL } from './styled';

interface SideMenuProps {
  category: string;
}

const MenuList = ({ data }: any) => {
  return (
    <>
    {data.map((item: Data) => {
      const title = item.title.split(' -', 1)[0].split('Mens', 2);
        return (
          <MenuUL>
            {title}
          </MenuUL> 
        )
      })}
    </>
  )
}

export const SideMenu = ({ category }: SideMenuProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> setData(json))
  });

  return (
    <MenuStyle>
      <MenuHeader>{category}</MenuHeader>
      <MenuOptionWrapper>
        <MenuList data={data} />
      </MenuOptionWrapper>
      
    </MenuStyle>
  )
}