import React from 'react';
import { Button } from 'react-bootstrap'

function TrialButton () {
  var myStyle = {
    width: '300px',
    height: '100px',
    fontSize: '1.4em'
  }

  return(
    <Button style={myStyle} variant="danger">TRY 30 DAYS FREE ></Button>
  );
}

export default TrialButton
