import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addYaxis, minusYaxis } from '../../actions/yAxis';
import { addXaxis, minusXaxis } from '../../actions/xAxis';
import './style.css';

export class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      yAxisValue: 0,
      xAxisValue: 0,
    };
  }

    addYaxis = () => this.props.addYaxis();
    minusYaxis = () => this.props.minusYaxis();
    addXaxis = () => this.props.addXaxis();
    minusXaxis = () => this.props.minusXaxis();

    render() {
      const {yAxisValue,xAxisValue} = this.props;
    	const style = {
    		top: yAxisValue + 13,
        left: xAxisValue + 13,
    	};
    	return (
      <div className="canvas">
          <div style={style} className="red-box-container">
          <div className="red-box"></div>
            y: {this.props.yAxisValue},
            x: {this.props.xAxisValue}
        </div>
        <div className="canvas-board"></div>
        <div className="controll-pannel">
          <div className="button up" onClick={this.minusYaxis} onKeyDown={this.minusYaxis} role="button">UP</div>
          <div className="button down" onClick={this.addYaxis} onKeyDown={this.addYaxis} role="button">DOWN</div>
          <div className="button left" onClick={this.minusXaxis} onKeyDown={this.minusXaxis} role="button">LEFT</div>
          <div className="button right" onClick={this.addXaxis} onKeyDown={this.addXaxis} role="button">RIGHT</div>
        </div>
      </div>
    	);
    }
}

export default connect(state => ({ yAxisValue: state.yAxisValue, xAxisValue: state.xAxisValue }), {
  addYaxis, minusYaxis, addXaxis, minusXaxis,
})(Canvas);
