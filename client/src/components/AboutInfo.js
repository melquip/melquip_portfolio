import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Loading from './Loading';

const StyledAboutInfo = styled.section`
  min-height: calc(100vh - 175px);
  background: ${props => props.theme.colors.lightgray};
`

const AboutInfo = (props) => {
  const { about } = props;

  if (!about.length) {
    return <Loading />;
  }

  return (
    <StyledAboutInfo id="aboutInfo">
      
    </StyledAboutInfo>
  )
}

export default connect(state => state, actionCreators)(AboutInfo);