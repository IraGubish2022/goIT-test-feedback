import SecondContainer from 'components/SecondContainer';
import { StyledFooter, FooterText, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <SecondContainer>
        <FooterText>
          Created by{' '}
          <FooterLink href="https://github.com/lisitsyna-anna">
            Iryna Gubish
          </FooterLink>
        </FooterText>
      </SecondContainer>
    </StyledFooter>
  );
};

export default Footer;