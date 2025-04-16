import React from 'react'
import { Spinner } from 'react-bootstrap'

import Hotjar from '@hotjar/browser';

// Initialize Hotjar
const siteId = 6373343;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

function Loader () {
  return (
    <Spinner animation='border' role='status' style={{
 width: '100px',
 height: '100px',
 margin: 'auto',
 display: 'block'
 }}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
