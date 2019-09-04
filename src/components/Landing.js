import React from 'react';
import LandingText from './LandingText'
import TrialButton from './TrialButton'

function Landing () {
  var textStyle = {
    marginTop: '48px',
    marginBottom: '48px'
  }
  return(
    <div>
    <div style={textStyle}>
    <LandingText />
    </div>
    <TrialButton/>
    </div>
  );
}
export default Landing
