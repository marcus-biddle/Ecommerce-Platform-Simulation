import React from 'react'
import { numToUSD } from '../../helpers/currency';
import { Column } from '../CLP/styled'

export const CartItem = ({ item }: any) => {
    // Need to include a delete button and to change quantity

  return (
    <div style={{backgroundColor: 'grey', width: '100%', padding: '12px', borderRadius: '5px', marginRight: '8px'}}>
        <Column>
            <div>{item.name}</div> 
            <div>{numToUSD(item.price)}</div>
        </Column>
    </div>
  )
}