import React from 'react';
import { ProgressBar } from 'react-bootstrap'

var nowPlus30Days = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));


function TrialBar(){
  var myStyle = {
    height: '25px',
    borderRadius: '25px',
    margin: '24px'
  }
  return (
    <div>
      <div className="timeline-labels">
        <div className="free-trial-text">
          Free 30 days
        </div>
        <div className="billing-text">
          <span className="bill-label">FIRST BILL</span>
          <span className="bill-date">{nowPlus30Days.getMonth() + 1}/{nowPlus30Days.getDay() - 1}</span>
        </div>
        <div className="second-bill-date">
          11/5
        </div>
      </div>
      <ProgressBar style={myStyle} variant="success" now={50} />
      <div className="end-bar"><span className="envelope"></span>3 day reminder</div>
    </div>
  );
}

export default TrialBar;
