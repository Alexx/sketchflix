import React from 'react';
import MultiPanelText from './MultiPanelText';
import TrialButtonSmall from './TrialButtonSmall';

function MultiPanel () {
  var textStyle = {
    marginTop: '85px',
    marginBottom: '48px'
  }
  return(
    <div>
    <div style={textStyle}>
    <MultiPanelText />
    </div>
    <TrialButtonSmall/>
    </div>
  );
}
export default MultiPanel
