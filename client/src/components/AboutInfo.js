import React from 'react';
import styled from 'styled-components';
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
      <div className="inner">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nesciunt animi consequuntur repellat aliquid totam! Tempore magni dolorem, blanditiis ea ad nihil hic cumque quasi fugit, expedita maxime perspiciatis sunt!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime illo praesentium asperiores nemo delectus nobis quibusdam error eaque cumque iste? Omnis dolorem dolore aliquid nobis beatae ducimus laborum totam ab?
        Ratione quis nisi provident excepturi molestias nostrum molestiae rem culpa, animi, recusandae quo, commodi qui consequuntur necessitatibus vero. Debitis alias natus consectetur voluptates vero illum quae sequi doloribus hic id!
        Fugit repellat odit nostrum omnis, quia unde iusto beatae dolores aliquam repellendus provident. Aspernatur nemo earum, molestiae, nihil veniam quia dolores vel pariatur quis alias ipsam ipsa cumque sequi libero.
        Eos doloribus mollitia veniam, fuga necessitatibus laborum sapiente, dignissimos officiis iste modi voluptate vel, molestiae corrupti consectetur aperiam rerum tempora architecto reiciendis ratione placeat sint sunt dolorum possimus. Blanditiis, ab.
      </div>
    </StyledAboutInfo>
  )
}

export default connect(state => state, actionCreators)(AboutInfo);