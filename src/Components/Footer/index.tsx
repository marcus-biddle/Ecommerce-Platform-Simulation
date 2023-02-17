import { Column } from '../../component-library/Column'
import { desktopFooter } from '../../data/Footer';
import { FooterNavLink, FooterNavWrapper, FooterStyle, NavHeader, StyledUL } from './styled'


// Fix type
const DesktopLinks = ({ items }: any) => {
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
  return (
    <FooterStyle>
        <Column>
            <FooterNavWrapper>
                <DesktopLinks items={desktopFooter} />
                <StyledUL>
                    <NavHeader>Become a member</NavHeader>
                    <FooterNavLink>Join now and get 10% off your next purchase!</FooterNavLink>
                    <p>READ MORE -{'>'}</p>
                </StyledUL>
            </FooterNavWrapper>
        </Column>
        
        
    </FooterStyle>
  )
}

export default Footer;