import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addYaxis, minusYaxis } from '../../actions/yAxis';
import { addXaxis, minusXaxis } from '../../actions/xAxis';
import { RedBox } from './redBox';

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:null,
      height:null,
    };
  }

    updateDimensions() {
        this.setState({
          width:this.refs.canvas.clientWidth,
          height:this.refs.canvas.clientHeight
          })
    }


  componentDidMount() {
    this.setState({width:this.refs.canvas.clientWidth})
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

    addYaxis = () => {this.props.addYaxis(this.refs.canvas.clientHeight)};
    minusYaxis = () => this.props.minusYaxis(this.refs.canvas.clientHeight);
    addXaxis = () => this.props.addXaxis(this.refs.canvas.clientWidth);
    minusXaxis = () => this.props.minusXaxis(this.refs.canvas.clientWidth);
      

    render() {
    	return (
      <div className='canvas'>
        <div className='canvasBoard' ref='canvas'>
        <div className='yAxisLabel'>y-axis</div>
        <RedBox 
          yAxisValue={this.props.yAxisValue}
          xAxisValue={this.props.xAxisValue}
          width={this.state.width}
          height={this.state.height}
        />
        </div>
        x-axis
        <div className='controllPannel'>
          <div className='button up' onClick={this.minusYaxis} onKeyDown={this.minusYaxis} role='button'>UP</div>
          <div className='button down' onClick={this.addYaxis} onKeyDown={this.addYaxis} role='button'>DOWN</div>
          <div className='button left' onClick={this.minusXaxis} onKeyDown={this.minusXaxis} role='button'>LEFT</div>
          <div className='button right' onClick={this.addXaxis} onKeyDown={this.addXaxis} role='button'>RIGHT</div>
        </div>
        <style jsx>{`
              .canvas {
                display: flex;
                flex-direction: column;
                align-items: right;
                font-family: Arial, Helvetica, sans-serif;
                align-items: center;
              }
              .canvasBoard {
                border: 5px #26282E solid;
                width: 70%;
                height: 80vh;
                position: relative;
              }
              .controllPannel{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: calc(70% + 14px);
                  div {
                    width:20%;
                  }
              }

              .yAxisLabel {
                  position: absolute;
                  left: -45px;
                  top: 12px;
                  -webkit-transform: rotate(-90deg);
                  color:#26282E;
              }

              .button {
                margin: 0.1em;
                border-radius: 0.1em;
                padding: 0.5em 1em;
                background-color: #26282E;
                color: #fff;
                text-align: center;
                width: 25%;
              }
              
              .button:action {
                  background-color: #4CAF50;
                }
        `}</style>
      </div>
    	);
    }
}

export default connect(state => ({ yAxisValue: state.yAxisValue, xAxisValue: state.xAxisValue }), {
  addYaxis, minusYaxis, addXaxis, minusXaxis
})(Canvas);
