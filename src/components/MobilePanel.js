import React from 'react';
import MobilePanelText from './MobilePanelText';
import TrialButtonSmall from './TrialButtonSmall';

function MobilePanel () {
  var textStyle = {
    marginTop: '85px',
    marginBottom: '48px'
  }
  return(
    <div>
    <div style={textStyle}>
    <MobilePanelText />
    </div>
    <TrialButtonSmall/>
  
    </div>
  );
}
export default MobilePanel
