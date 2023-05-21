import { Link } from 'react-router-dom';
import { FOOTER_LINKS, FooterLink, FooterProps } from '../../constants/content';
import { showIfOrElseWindow } from '../../helpers/media';
import { useWindowDemension } from '../../hooks/mobile';

const Footer = () => {
    const desktopFoot = (
            <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'rgb(0,0,0,.15)'}}>
            <p style={{ padding: '12px'}}>
            <Link to='/' style={{ fontFamily: 'Abel, sans-serif', fontSize: '18px', fontWeight: 'bolder'}}>Poke Center</Link>
            <br/>
            <p style={{ fontFamily: 'Abel, sans-serif', fontSize: '12px', opacity: '.5', fontWeight: 'bolder'}}>Specializes in providing high-quality, powerful pokemon<br /> for life long companionship.</p>
            </p>
                {FOOTER_LINKS.map((section: FooterProps) => {
                    return (
                        <div key={section.name}>
                            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px'}}>{section.name}</p>
                            {section.links.map((link: FooterLink) => {
                                return (
                                    <p key={link.label} style={{ fontFamily: 'Abel, sans-serif', fontSize: '14px', opacity: '.5', cursor: 'pointer', fontWeight: 'bolder'}}>{link.label}</p>
                                )
                            })}
                        </div>
                    )
                })}
            <div>
                <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px'}}>Payment Methods</p>
                <p style={{ fontFamily: 'Abel, sans-serif', fontSize: '14px', opacity: '.5', cursor: 'pointer', fontWeight: 'bolder'}}>TBD</p>
            </div>
        </div>
    )

    const mobileFooter = (
        <div style={{ marginBottom: '2rem'}}></div>
    )
    
  return (
    <>
    {showIfOrElseWindow(useWindowDemension())((desktopFoot))((mobileFooter))}
    </>
  )
}

export default Footer;