import React from 'react';
import { Image } from 'react-bootstrap'
import PhoneImage from '../img/mobile-0819.jpg'
import BoxImage from '../img/boxshot.png'
import dowloading from '../img/download-icon.gif'

function MobilePanelImage(){
  var myStyle = {
    height: 'auto',
    width: '100%',
    float: 'left',
    marginTop: '85px',

  }
  return (
    <div>
      <Image style={myStyle} src={PhoneImage} rounded />
      <div className="phone-overlay">
        <div className="thumbnail">
          <Image src={BoxImage} />
        </div>
        <div className="loading-text">
          <div className="title">Stranger Things</div>
          <div className="downloading">Downloading...</div>
        </div>
        <div className="loading-icon">
          <Image src={dowloading} />
        </div>
      </div>
    </div>
  );
}
export default MobilePanelImage;
