import { Link, useLocation } from 'react-router-dom'
import { showIfOrElseWindow } from '../../helpers/media'
import { getPathname } from '../../helpers/navigation'
import { useWindowDemension } from '../../hooks/mobile'
import { DesktopNavbar } from '../Navbar/Desktop'
import { MobileNavbar } from '../Navbar/Mobile'
import { BsArrowLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const CartHeader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '115px', marginLeft: '2rem', paddingTop: '12px'}}>
      <Link to='/'>
        <BsArrowLeft style={{ fontSize: '26px'}}/>
      </Link>
      <div style={{ fontFamily: 'Abel', fontSize: '24px'}}>Cart</div>
    </div>
  )
}

export const Header = () => {
  const [isCart, setIsCart] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/cart') {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  }, [pathname])

  return (
    <>
        {showIfOrElseWindow(useWindowDemension())
        ((<DesktopNavbar />))
        ( isCart ? (<CartHeader />) :(<MobileNavbar />))}
    </>
  )
}