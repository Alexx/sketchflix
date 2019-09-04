import React from 'react';
import { Image } from 'react-bootstrap'
import TvImage from '../img/tv.png'

function TvPanelImage(){
  var myStyle = {
    height: '250px',
    width: '400px',
    float: 'right',
    marginTop: '85px'
  }
  return (
    <Image style={myStyle} src={TvImage} rounded />
  );
}

export default TvPanelImage;
