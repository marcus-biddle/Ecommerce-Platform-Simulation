import { showIfOrElseWindow } from '../../helpers/media'
import { useWindowDemension } from '../../hooks/mobile'
import { DesktopNavbar } from '../Navbar/Desktop'
import { MobileNavbar } from '../Navbar/Mobile'

export const Header = () => {
  return (
    <div style={{ marginTop: '1rem'}}>
        {showIfOrElseWindow(useWindowDemension())((<DesktopNavbar />))((<MobileNavbar />))}
    </div>
  )
}