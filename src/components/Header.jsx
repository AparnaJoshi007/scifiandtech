import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.colors.white.base};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
  h1 {
    margin: 0;
  }
`;

const SimpleWrapper = styled.header`
  background: ${props => props.theme.colors.white.base};
  margin: 8px;
  position: relative;
  overflow: hidden;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 20px;
  }
`;

const Text = styled.div`
  color: ${props => props.theme.colors.black.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
  h1 {
    
  }
`;

const HeaderText = styled.h1`
  color: rgb(239, 236, 252);
  margin-bottom: 8px;
  display: inline-block;
  &:hover {
    color: ${props => props.theme.colors.primary.base}
  }
`;


const Header = ({ children, title, date, cover }) => {
  return (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children}
    </Text>
  </Wrapper>
)};

const SimpleHeader = ({ children, title}) => {
  return (
    <SimpleWrapper>
      <HeaderText>{title}</HeaderText>
      {children}
    </SimpleWrapper>
  )
}

export {Header, SimpleHeader};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
