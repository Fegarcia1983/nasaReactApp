import React, { useState } from 'react';

import { Navbar, Container, Button } from 'react-bootstrap';

import { useFetch } from '../../hooks/useFetch';

export const NavBar = () => {

  const [ state, setState ] = useState(1)

  const nexPage = () => {
    setState(state + 1 );
  }

  const apiKey = '5icN9xXgLixgVF6dF1I2VY2P8sv74U82Zav5veTo';

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=${apiKey}`;

  const {photos} = useFetch( url );
  console.log(photos);

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">NASA App</Navbar.Brand>
        </Container>
        <Button variant="outline-info" onClick={ nexPage }>Get Images</Button>
    </Navbar>
    </>
  )
}
