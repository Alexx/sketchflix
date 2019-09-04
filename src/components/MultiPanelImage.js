import React from 'react';
import { Image } from 'react-bootstrap'
import MultiImage from '../img/multi.png'

function MultiPanelImage(){
  var myStyle = {
    height: '250px',
    width: '400px',
    float: 'right',
    marginTop: '85px'
  }
  return (
    <Image style={myStyle} src={MultiImage} rounded />
  );
}

export default MultiPanelImage;
