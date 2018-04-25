import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addYaxis, minusYaxis } from '../../actions/yAxis';
import { addXaxis, minusXaxis } from '../../actions/xAxis';
import './style.css';

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yAxisValue: 0,
      xAxisValue: 0,
    };
  }

    addYaxis = () => {this.props.addYaxis(this.refs.canvas.clientHeight)};
    minusYaxis = () => this.props.minusYaxis(this.refs.canvas.clientHeight);
    addXaxis = () => this.props.addXaxis(this.refs.canvas.clientWidth);
    minusXaxis = () => this.props.minusXaxis(this.refs.canvas.clientWidth);

    render() {
      const {yAxisValue,xAxisValue} = this.props;
    	const styleRedBox = {
    		top: yAxisValue,
        left: xAxisValue,
      };
      const stylText = {
    		top: yAxisValue,
        left: xAxisValue + 20,
        position:'relative'
    	};
    	return (
      <div className='canvas'>
        <div className='canvas-board' ref='canvas'>
        <div style={styleRedBox} className='red-box'></div>
        <span style={stylText} className='redBoxText'>y: {this.props.yAxisValue}, x: {this.props.xAxisValue}</span>
        </div>
        <div className='controll-pannel'>
          <div className='button up' onClick={this.minusYaxis} onKeyDown={this.minusYaxis} role='button'>UP</div>
          <div className='button down' onClick={this.addYaxis} onKeyDown={this.addYaxis} role='button'>DOWN</div>
          <div className='button left' onClick={this.minusXaxis} onKeyDown={this.minusXaxis} role='button'>LEFT</div>
          <div className='button right' onClick={this.addXaxis} onKeyDown={this.addXaxis} role='button'>RIGHT</div>
        </div>
      </div>
    	);
    }
}

export default connect(state => ({ yAxisValue: state.yAxisValue, xAxisValue: state.xAxisValue }), {
  addYaxis, minusYaxis, addXaxis, minusXaxis,
})(Canvas);
