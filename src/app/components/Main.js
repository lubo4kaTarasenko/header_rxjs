import React from 'react'
import TextBody from './TextBody';
import Header from './Header';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { fromEvent } from 'rxjs';


export default class Main extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {
      wasButton: false
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
        {this.state.wasButton ? <Header/> : null}
        <Jumbotron fluid id='header'>
          <Container>
           <h1>Super Amazing Header</h1>
           {this.state.wasButton ? <Button variant="success" id='buy_btn_h'>BUY NOW</Button> : null}
          </Container>
        </Jumbotron>        
        <TextBody/>
        <div className='buy'>
          <Button variant="success" id='buy_btn'>BUY NOW</Button>
        </div>
        <TextBody/>
      </div>
  )}

  scrollAnimation(){   
    console.log('scroll') 
    const header = document.getElementById('header')
    const scrollableContainer = document.getElementsByTagName('html')[0];
    const scrollDiff = scrollableContainer.scrollTop - this.prevScrollTop
    if (Math.abs(scrollDiff) < 50) return
    if (scrollDiff > 0){ 
      header.classList.add("out");
      if(this.wasBtn(scrollableContainer.scrollTop)) this.setState({wasButton: true})      
    }
    else {
      header.classList.remove("out");
      if(this.wasNotBtn(scrollableContainer.scrollTop)) this.setState({wasButton: false})      
    } 
    this.prevScrollTop = scrollableContainer.scrollTop
  }
 
    getCoords(scroll) {
      const buy = document.getElementById("buy_btn")
      let box = buy.getBoundingClientRect();
      let top =  box.top + scroll    
      return top
    }

    wasBtn(scroll){
      let buttonCoord = this.getCoords(scroll)
      return (scroll > buttonCoord)
    }

    wasNotBtn(scroll){
      let buttonCoord = this.getCoords(scroll)
      return (scroll < buttonCoord)
    }    
}
