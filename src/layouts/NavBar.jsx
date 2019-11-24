import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/icons/image.png';
import menu from '../../static/icons/menu.svg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.black.base};
  display: block;
  font-weight: normal;
  ${({ headerlink, activelink, theme }) => headerlink === activelink && `
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 3px;
    color: ${theme.colors.primary.base};
    background: rgb(239, 236, 252);
  `}
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const Img = styled.img`
  padding: 0;
  margin: 0;
  position: relative;
  top: 2px;
  left: 5px;
`;

const Logo = styled.div`
  background: rgb(239, 236, 252);
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

const Text = styled.div`
  margin: 0;
  margin-left: 1rem;
  text-align: center;
  font-weight: normal;
  color: ${props => props.theme.colors.black.base};
  
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
      padding: 4px 10px;
      border-radius: 3px;
      color: ${props => props.theme.colors.primary.base};
      background: rgb(239, 236, 252);
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  margin: 12px;
  a {
    padding: 4px 10px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
  }
`;

const Button = styled.div`
  display: none;
  position: absolute;
  right: 12px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: block;
  }
`;


class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }  

  toggleMobileMenu() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }

  render() {
    const { headerlink } = this.props
    return(
      <>
      <Headroom disableInlineStyles>
        <StyledLink to="/">
          <Logo>
            <Img src={logo} alt="Logo" width="50px" height="50px" />
          </Logo>
          <Text>ScifiandTech</Text>
        </StyledLink>
          <Button onClick={this.toggleMobileMenu}>
            <Img src={menu} alt="Menu" />
          </Button>
          <Nav>
              <NavLink to="/" headerlink={headerlink} activelink='/'>Home</NavLink>
              <NavLink to="/blog" headerlink={headerlink} activelink='/blog'>Blog</NavLink>
              <NavLink to="/about" headerlink={headerlink} activelink='/about'>About</NavLink>
          </Nav>
      </Headroom>
      {this.state.mobileOpen && 
        <MobileNav>
            <NavLink to="/" headerlink={headerlink} activelink='/'>Home</NavLink>
            <NavLink to="/blog" headerlink={headerlink} activelink='/blog'>Blog</NavLink>
            <NavLink to="/about" headerlink={headerlink} activelink='/about'>About</NavLink>
        </MobileNav>
        }
        </>
    )
  }
  
}


export default NavBar;

NavBar.propTypes = {
  headerlink: PropTypes.string.isRequired,
};