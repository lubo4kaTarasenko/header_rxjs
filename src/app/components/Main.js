import React from 'react'
import TextBody from './TextBody';
import { Container, Jumbotron } from 'react-bootstrap';

export default class Main extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log('set');
    //document.onscroll  = ()=>{
     // this.scrollAnimation()
   // }
    window.onscroll = () => { this.scrollAnimation()};
  }

  render() {
    return (
      <div className='main_cont'>
        <Jumbotron fluid id='header'>
          <Container>
           <h1>Super Amazing Header</h1>
          </Container>
        </Jumbotron>        
        <TextBody/>
      </div>
  )}

  scrollAnimation(){    
    const header = document.getElementById('header')
    const scrollableContainer = document.getElementsByTagName('html')[0];
      
    if (scrollableContainer.scrollTop > 50) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    }   
  }

}
