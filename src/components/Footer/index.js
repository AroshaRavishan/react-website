import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer,FooterWrap,
         FooterLinksContainer,FooterLinksWrapper,
         FooterLinkItems, FooterLinkTitle,
         FooterLink, SocialMedia,SocialMediaWrap,SocialLogo,
         WebsiteRights, SocialIconLink, SocialIcons

        } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonial</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> 
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signin">Submit Video</FooterLink>
                <FooterLink to="/signin">Ambassoder</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Influencer</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> 
            </FooterLinkItems>

          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Desrinations</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> 
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Twitter</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">You tube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
                <FooterLink to="/signin">LinkedIn</FooterLink> 
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
           <SocialMediaWrap>
             <SocialLogo to='/' onClick={toggleHome}>
                dolla
             </SocialLogo>
             <WebsiteRights>
               dolla {new Date().getFullYear()} All rights reserved
             </WebsiteRights>
             <SocialIcons>
                <SocialIconLink href="/" target="_blank"
                aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank"
                aria-label="Youtube">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank"
                aria-label="Linkedin">
                    <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank"
                aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
             </SocialIcons>
           </SocialMediaWrap> 
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
