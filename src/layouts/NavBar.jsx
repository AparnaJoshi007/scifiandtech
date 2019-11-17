import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/icons/image.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.primary.base};
  display: block;
  ${({ headerlink, activelink, theme }) => headerlink === activelink && `
    text-decoration: none;
    padding: 4px 5px;
    border-radius: 3px;
    font-weight: bold;
    color: ${theme.colors.hover.base};
  `}
`;

const Img = styled.img`
  padding: 0;
  margin: 0;
`;

const Text = styled.div`
  margin: 0;
  margin-left: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.primary.base};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      text-decoration: none;
      padding: 4px 5px;
      border-radius: 3px;
      font-weight: bold;
      color: ${props => props.theme.colors.hover.base};
    }
  }
`;

const NavBar = ({ headerlink }) => {
  return(
    <Headroom disableInlineStyles>
      <StyledLink to="/">
        <Img src={logo} alt="Logo" width="50px" height="50px" />
        <Text>ScifiandTech</Text>
      </StyledLink>
      
      <Nav>
        <NavLink to="/" headerlink={headerlink} activelink='/'>Home</NavLink>
        <NavLink to="/blog" headerlink={headerlink} activelink='/blog'>Blog</NavLink>
        <NavLink to="/about" headerlink={headerlink} activelink='/about'>About</NavLink>
      </Nav>
    </Headroom>
  )
}


export default NavBar;

NavBar.propTypes = {
  headerlink: PropTypes.string.isRequired,
};