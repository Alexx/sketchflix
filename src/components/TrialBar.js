import React from 'react';
import { ProgressBar } from 'react-bootstrap'


function TrialBar(){
  var myStyle = {
    height: '25px',
    borderRadius: '25px',
    margin: '24px'
  }
  return (
<ProgressBar style={myStyle} variant="success" now={50} />
  );
}

export default TrialBar;
