import React from 'react';
import { Image } from 'react-bootstrap'
import PhoneImage from '../img/phone.png'

function MobilePanelImage(){
  var myStyle = {
    height: '250px',
    width: '245px',
    float: 'left',
    marginTop: '85px'
  }
  return (
    <Image style={myStyle} src={PhoneImage} rounded />
  );
}
export default MobilePanelImage;
