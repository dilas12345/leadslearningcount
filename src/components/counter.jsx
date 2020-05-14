import React, { Component } from 'react';
import '../styles/app.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }
    startTime(){
        setInterval(() => {
            this.getCountdown(this.props.target);
        }, 1000);
    }
    getCountdown(target){
        const time = Date.parse(target) - Date.parse(new Date());
        let seconds= Math.floor((time/1000)%60);
        let minutes= Math.floor((time/(1000*60))%60);
        let hours= Math.floor((time/(1000*60*60))%24);
        let days= Math.floor(time/(1000*60*60*24));
        this.setState({days, hours, minutes, seconds});
    }
    fixNum(num){
        return (num<10? '0'+num:num);
    }
    render(){
        return(
            <div className="counter">
                <span id="t-days">{this.fixNum(this.state.days)}</span> D &nbsp;
                <span id="t-hours">{this.fixNum(this.state.hours)}</span> H &nbsp;
                <span id="t-minutes">{this.fixNum(this.state.minutes)}</span> M &nbsp;
                <span id="t-seconds">{this.fixNum(this.state.seconds)}</span> S &nbsp;
                {this.startTime()}
            </div>
        );
    }
}
export default Counter;