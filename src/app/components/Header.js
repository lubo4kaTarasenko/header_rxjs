import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap';
export default class Header extends React.Component {    
  render() {
    return(
    <Jumbotron fluid id='new_header'>
      <Container>
      <h1>Get an amazing discount</h1>
      </Container>
      <div className='header_buy'>
          <Button variant="success" id='buy_btn_h'>BUY NOW</Button>
        </div>
    </Jumbotron>        
  )}
}
