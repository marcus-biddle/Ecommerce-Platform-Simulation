import { Link } from 'react-router-dom';
import { desktopFooter } from '../../constants/info';
import { showIfOrElseWindow } from '../../helpers/media';
import { useWindowDemension } from '../../hooks/mobile';

// interface FooterLinkProps {
//     items: { 
//         name: string; 
//         links: { 
//             label: string; 
//         }[]; 
//     }[];
// }
// const DesktopLinks = ({ items }: FooterLinkProps) => {
//     return (
//         <>
//         {items?.map((item: any, index: any) => {
//             return (
//                 <StyledUL key={`footer-link-${item.name}`}>
//                     <NavHeader>{item.name}</NavHeader>
//                     {item.links.map((link: any, index: any) => {
//                         const linkProps = {
//                             key: `footer-link-${index}`,
//                             onClick: () => {alert(`${link.label} button pressed.`)},
//                         };
//                         return <FooterNavLink {...linkProps}>{link.label}</FooterNavLink>
//                     })}
//                 </StyledUL>
//             )
//         })}
//         </>
//     );
// };

const Footer = () => {
    const desktopFoot = (
            <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'rgb(0,0,0,.15)'}}>
            <p style={{ padding: '12px'}}>
            <Link to='/' style={{ fontFamily: 'Abel, sans-serif', fontSize: '18px', fontWeight: 'bolder'}}>Poke Center</Link>
            <br/>
            <p style={{ fontFamily: 'Abel, sans-serif', fontSize: '12px', opacity: '.5', fontWeight: 'bolder'}}>Specializes in providing high-quality, powerful pokemon<br /> for life long companionship.</p>
            </p>
                {desktopFooter.map((item) => {
                    return (
                        <div>
                            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px'}}>{item.name}</p>
                            {item.links.map((link) => {
                                return (
                                    <p style={{ fontFamily: 'Abel, sans-serif', fontSize: '14px', opacity: '.5', cursor: 'pointer', fontWeight: 'bolder'}}>{link.label}</p>
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
        
    //     <FooterStyle>
    //     <ColumnFooter>
    //         <FooterNavWrapper>
    //             <DesktopLinks items={desktopFooter} />
    //             <StyledUL>
    //                 <NavHeader>Become a member</NavHeader>
    //                 <FooterNavLink>Join now and get 10% off your next purchase!</FooterNavLink>
    //                 <p>READ MORE -{'>'}</p>
    //             </StyledUL>
    //         </FooterNavWrapper>
    //     </ColumnFooter>
    // </FooterStyle>
    )

    const mobileFooter = (
        <div style={{ marginBottom: '4rem'}}></div>
    )
    
  return (
    <>
    {showIfOrElseWindow(useWindowDemension())((desktopFoot))((mobileFooter))}
    </>
  )
}

export default Footer;