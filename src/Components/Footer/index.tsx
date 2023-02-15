import { Column } from '../../component-library/Column'
// import { desktopFooter } from '../../data/fakeFooterData'
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
                            classname: 'secondary',
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
                {/* <DesktopLinks items={desktopFooter} /> */}
            </FooterNavWrapper>
            {/* Fix this, we want to  include it somehow */}
            <section>
                <h5>Become a member</h5>
                <p>Join now and get 10% off your next purchase!</p>
                <p>READ MORE -{'>'}</p>
            </section>
        </Column>
        
    </FooterStyle>
  )
}

export default Footer;