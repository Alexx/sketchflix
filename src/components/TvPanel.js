import React from 'react';
import TvPanelText from './TvPanelText';
import TrialButtonSmall from './TrialButtonSmall';

function TvPanel () {
  var textStyle = {
    marginTop: '85px',
    marginBottom: '48px'
  }
  return(
    <div>
    <div style={textStyle}>
    <TvPanelText />
    </div>
    <TrialButtonSmall/>
    </div>
  );
}
export default TvPanel
