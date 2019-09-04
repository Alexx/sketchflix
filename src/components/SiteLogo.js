import React from 'react';
import { Image } from 'react-bootstrap'
import Flix from '../img/flix.png'

function SiteLogo(){
  var myStyle = {
    height: '75px',
    width: '200px',
    float: 'left',
  }
  return (
    <Image style={myStyle} src={Flix} rounded />
  );
}

export default SiteLogo;
