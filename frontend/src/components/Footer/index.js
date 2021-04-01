import { Fragment } from "react";
import { FooterSection, FooterWrapper, Logo, FooterLink, Heading, FooterContainer, FooterNav } from "./Footer.elements";
import { GiCookingPot } from "react-icons/gi";



const Footer = () => {
    return(
        <Fragment>
            <FooterSection>
                <FooterContainer>
                    <FooterWrapper>
                        <Logo><GiCookingPot />EzPzMeals</Logo>
                        <FooterNav>
                            <Heading>Explore</Heading>
                            <FooterLink>Home</FooterLink>
                            <FooterLink>Recipes</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </FooterNav>
                        <FooterNav>
                            <Heading>Contact Us</Heading>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>FAQ</FooterLink>
                        </FooterNav>
                        <FooterNav>
                            <Heading>Socila</Heading>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>FAQ</FooterLink>
                        </FooterNav>
                    </FooterWrapper>
                </FooterContainer>
            </FooterSection>
        </Fragment>
    );
}


export default Footer;