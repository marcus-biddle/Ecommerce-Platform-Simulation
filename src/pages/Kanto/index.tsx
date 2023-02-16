import React from 'react'
import { CLP } from '../../components/CLP'
import { SideMenu } from '../../components/SideMenu'
import { REGIONS } from '../../constants'

export const Kanto = () => {
  return (
    <div>
      {REGIONS[0].label}
      <CLP region={REGIONS[0]}/>
      {/* create our own prices data */}
    </div>
  )
}
