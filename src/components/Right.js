import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Right extends Component {
    constructor() {
            super();
            this.state = {percentage: 0};
        }

        componentDidMount() {
            this.interval = setInterval(() => {
                this.setState({percentage: ++this.state.percentage}),
                  if (this.state.percentage === 100){
                  clearInterval(this.interval);
                    }  
            }
            100);
            

        }
    render() {
        return (
            <div>
            {<CircularProgressbar
                    percentage={this.state.percentage}
                    text={`${this.state.percentage}%`}
                />}
            </div>
        );
    }
}
