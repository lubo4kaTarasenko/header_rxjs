import React from 'react'
import TextBody from './TextBody';
import { Container, Jumbotron } from 'react-bootstrap';

export default class Main extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div className='container'>
        <Jumbotron fluid>
          <Container>
           <h1>Super Amazing Header</h1>
          </Container>
        </Jumbotron>        
        <TextBody/>
      </div>
  )}



}
