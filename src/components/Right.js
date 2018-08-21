import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Right extends Component {
    constructor() {
            super();
            this.state = {percentage: 0};
            this.percentage = 0;
        }

        componentDidMount() {
            const that = this;
            this.interval = setInterval(() =>
                this.setState({percentage: ++that.state.percentage}),
            100);
            if (that.state.percentage === 100){
                clearInterval(this.interval);
            }

        }
    render() {
        return (
            <div>
            {this.state.percentage<=100 && <CircularProgressbar
                    percentage={this.state.percentage}
                    text={`${this.state.percentage}%`}
                />}
            </div>
        );
    }
}
