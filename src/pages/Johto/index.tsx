import React from 'react'
import { CLP } from '../../components/CLP'
import { REGIONS } from '../../constants';

const MEN_CLOTHING = "men's clothing";

export const Johto = () => {
  return (
    <div>
      {REGIONS[1].label}
      <CLP region={REGIONS[1]}/>
      {/* create our own prices data */}
    </div>
  )
}