import React from 'react';
import TrialBar from './TrialBar'

function LandingText () {
  var myStyle = {
    color: '#fff'
  }

  return(
    <div style={myStyle}>
    <h1><strong>All of Sketchflix.</strong></h1>
    <h1><strong>Free for 30 days.</strong></h1>
    <TrialBar/>
    <h3>We'll email you a reminder three days before your trial ends.</h3>
    <h3>Cancel anytime before 10/4 and you won't be charged.</h3>
    </div>
  );
}

export default LandingText
