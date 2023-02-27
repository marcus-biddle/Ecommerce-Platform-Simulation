import { desktopFooter } from '../../constants/info';
import { showIfOrElseWindow } from '../../helpers/media';
import { useWindowDemension } from '../../hooks/mobile';
import { ColumnFooter, FooterNavLink, FooterNavWrapper, FooterStyle, NavHeader, StyledUL } from './styled'

interface FooterLinkProps {
    items: { 
        name: string; 
        links: { 
            label: string; 
        }[]; 
    }[];
}
const DesktopLinks = ({ items }: FooterLinkProps) => {
    return (
        <>
        {items?.map((item: any, index: any) => {
            return (
                <StyledUL key={`footer-link-${item.name}`}>
                    <NavHeader>{item.name}</NavHeader>
                    {item.links.map((link: any, index: any) => {
                        const linkProps = {
                            key: `footer-link-${index}`,
                            onClick: () => {alert(`${link.label} button pressed.`)},
                        };
                        return <FooterNavLink {...linkProps}>{link.label}</FooterNavLink>
                    })}
                </StyledUL>
            )
        })}
        </>
    );
};

const Footer = () => {
    const desktopFoot = (
        <FooterStyle>
        <ColumnFooter>
            <FooterNavWrapper>
                <DesktopLinks items={desktopFooter} />
                <StyledUL>
                    <NavHeader>Become a member</NavHeader>
                    <FooterNavLink>Join now and get 10% off your next purchase!</FooterNavLink>
                    <p>READ MORE -{'>'}</p>
                </StyledUL>
            </FooterNavWrapper>
        </ColumnFooter>
    </FooterStyle>
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