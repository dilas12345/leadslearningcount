import React, { Component } from 'react';
import '../styles/app.css';
import Counter from './counter';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            target: 'May 30, 2020'
        }
    }
    changeTarget(){
        this.setState({target:document.getElementById('time-input').value});
    }
    
    render(){
        return(
            <div id="main">
                <div className="header"> Leads Learning Count down </div>
                <div className="sub-header">Time left from <span id="target-time">{this.state.target}</span></div>
                <Counter target={this.state.target}/>
                <div className="new-input">
                    <input type="text" id="time-input"></input>
                    <button id="start-button" onClick={()=> this.changeTarget()}>Start</button>
                </div>
            </div>
        );
    }
}

export default App;