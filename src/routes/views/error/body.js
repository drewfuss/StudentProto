import React from 'react';
import Center from 'react-center';
import { Button } from 'react-bootstrap';

export default () => (
    <div>
      <Center>
        <h1>Error Finding Page</h1>
      </Center>
      <p></p>
      <Center>
        <Button className='info' onClick={() => { window.location = '/donate'; }}>Home</Button>
      </Center>
    </div>
)
