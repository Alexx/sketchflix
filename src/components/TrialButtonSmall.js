import React from 'react';
import { Button } from 'react-bootstrap'

function TrialButton () {
  var myStyle = {
    width: '200px',
    height: '40px',
    fontSize: '1em',
    border: '1px solid white',
    backgroundColor: 'transparent'
  }

  return(
    <Button style={myStyle} variant="dark">TRY 30 DAYS FREE ></Button>
  );
}

export default TrialButton
