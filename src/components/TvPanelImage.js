import React from 'react';
import { Image } from 'react-bootstrap'
import TvImage from '../img/tv.png'
import video from '../img/video-tv-0819.m4v'

function TvPanelImage(){
  var myStyle = {
    height: 'auto',
    width: '100%',
    float: 'right',
    marginTop: '85px',
    position: 'absolute',
    bottom: '-28%',
    left: '10%',
  }
  return (
    <div>
      <Image className="tv" style={myStyle} src={TvImage} rounded />
      <div className="tv">
        <video className="tv-video" autoPlay playsInline muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default TvPanelImage;
