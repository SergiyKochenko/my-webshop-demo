import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Hotjar from '@hotjar/browser';

// Initialize Hotjar
const siteId = 6373343;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

function Footer () {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'> Copyright © WebShop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
