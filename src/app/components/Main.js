import React from 'react'
import TextBody from './TextBody';
import { Container, Jumbotron } from 'react-bootstrap';
import { timer } from 'rxjs';

export default class Main extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.prevScrollTop = 0
    const header = document.getElementById('header')
    const scrollableContainer = document.getElementsByTagName('html')[0];
    const t = timer(0, 100);
    t.subscribe(()=> {      
      const scrollDiff = this.prevScrollTop - scrollableContainer.scrollTop
      
      if(scrollDiff == 0) return;
      if (scrollDiff >= -50) { header.classList.add("out");
      } else {
        header.classList.remove("out");
      } 
      this.prevScrollTop = scrollableContainer.scrollTop
    })
   
    //window.onscroll = () => { this.scrollAnimation()};
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
    const scrollDiff = this.prevScrollTop - scrollableContainer.scrollTop
    if (scrollDiff <= 50) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    } 
    this.prevScrollTop = scrollableContainer.scrollTop
  }

}
