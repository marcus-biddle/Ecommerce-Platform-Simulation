import React from 'react'
import { CLP } from '../../components/CLP'
import { REGIONS } from '../../constants'

export const Sinnoh = () => {
  return (
    <div>
      <CLP region={REGIONS[2]}/>
      {/* create our own prices data */}
    </div>
  )
}