import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Timer extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 20 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
      }
    
      startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
          alert('Time is up!');
          this.props.history.push('/finalchoice');
        }
      }

      setColor = (event) => {
          let color = event.target.value;
          console.log(color);
          this.props.dispatch({
            type: 'SET_COLOR',
            payload: color
        });
      }
    
      render() {
        return(
          <div>
            m: {this.state.time.m} s: {this.state.time.s}
            <button value="Red" onClick={(event) => this.setColor(event)}>Red</button>
            <button value="Blue" onClick={(event) => this.setColor(event)}>Blue</button>
            <button value="Green" onClick={(event) => this.setColor(event)}>Green</button>
            <button value="Yellow" onClick={(event) => this.setColor(event)}>Yellow</button>
          </div>
        );
      }
}
 
export default connect()(Timer);