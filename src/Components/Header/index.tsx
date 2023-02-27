import React from 'react'
import { showByWindowSize } from '../../helpers/media'
import { useWindowDemension } from '../../hooks/mobile'
import { DesktopNavbar } from '../Navbar/Desktop'
import { MobileNavbar } from '../Navbar/Mobile'

export const Header = () => {
  return (
    <>
        {showByWindowSize(useWindowDemension())((<DesktopNavbar />))((<MobileNavbar />))}
    </>
  )
}