import React from 'react'
import TextBody from './TextBody';
import { Container, Jumbotron } from 'react-bootstrap';
import { fromEvent } from 'rxjs';


export default class Main extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.prevScrollTop = 0
    const scroll = fromEvent(window, 'scroll')
    scroll.subscribe(()=>{this.scrollAnimation()})
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
    console.log('scroll') 
    const header = document.getElementById('header')
    const scrollableContainer = document.getElementsByTagName('html')[0];
    const scrollDiff = scrollableContainer.scrollTop - this.prevScrollTop
    if (Math.abs(scrollDiff) < 50) return
    if (scrollDiff > 0){ header.classList.add("out");}
    else {
      header.classList.remove("out");
    } 
    this.prevScrollTop = scrollableContainer.scrollTop
  }

}
