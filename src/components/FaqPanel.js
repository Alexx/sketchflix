import React from 'react';
import FaqPanelText from './FaqPanelText';
import TrialButton from './TrialButton';
import FaqPanelQAList from './FaqPanelQAList'

function FaqPanel () {
  var textStyle = {
    marginTop: '85px',
    marginBottom: '48px'
  }

  var buttonStyle = {
    marginTop: '60px',
    marginBottom: '50px'
  }
  return(
    <div>
    <div style={textStyle}>
    <FaqPanelText />
    </div>
    <FaqPanelQAList/>
    <div style={buttonStyle}>
    <TrialButton/>
    </div>
    </div>
  );
}
export default FaqPanel
