import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.colors.white.base};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.complimentary.dark};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div>
        &copy;ScifiandTech - 2019
      </div>
      <div>Built with Gatsby</div>
    </Text>
  </Wrapper>
);
export default Footer;
