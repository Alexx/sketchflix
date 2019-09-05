import React from 'react';
import { Image } from 'react-bootstrap'
import MultiImage from '../img/device-pile.png'
import video from '../img/video-devices.m4v'


function MultiPanelImage(){
  var myStyle = {
    height: 'auto',
    width: '100%',
    float: 'right',
    marginTop: '85px',
    zIndex: '3'
  }
  return (
    <div>
      <Image className="devices" style={myStyle} src={MultiImage} rounded />
      <div className="tv">
        <video className="multi-video" autoPlay playsInline muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default MultiPanelImage;
