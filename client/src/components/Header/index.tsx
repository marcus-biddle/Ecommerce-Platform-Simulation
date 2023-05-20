import { showIfOrElseWindow } from '../../helpers/media'
import { getPathname } from '../../helpers/navigation'
import { useWindowDemension } from '../../hooks/mobile'
import { DesktopNavbar } from '../Navbar/Desktop'
import { MobileNavbar } from '../Navbar/Mobile'

export const Header = () => {
  const path = getPathname();

  return (
    <>
        {showIfOrElseWindow(useWindowDemension())
        ((<DesktopNavbar />))
        ( path === '/cart' ? ('Cart') :(<MobileNavbar />))}
    </>
  )
}