import React from 'react'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { REGIONS } from '../../constants'

export const Electronics = () => {
  return (
    <div>
      {REGIONS[0].label}
      <SideMenu region={REGIONS[0].label}/>
      {/* create our own prices data */}
    </div>
  )
}
