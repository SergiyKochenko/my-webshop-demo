import React from 'react'
import { Alert } from 'react-bootstrap'

import Hotjar from '@hotjar/browser';

// Initialize Hotjar
const siteId = 6373343;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

function Message ({ variant, children }) {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default Message
