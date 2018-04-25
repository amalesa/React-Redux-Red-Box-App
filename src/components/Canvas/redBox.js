import React, { Component } from 'react';
import './style.css';

export class RedBox extends Component {

    render() {
        const { yAxisValue ,xAxisValue, width} = this.props;
        const textLeft = xAxisValue < (width/2) ? xAxisValue + 25 : xAxisValue - 68;
        return (
            <div className='redBoxContainer'>
                 <div className='redBox'></div>
                 <span className='redBoxText'>y: {yAxisValue}, x: {xAxisValue}</span>
                 <style jsx>{`
                    .redBox {
                        background: #EB4769;
                        height:10px;
                        width:10px;
                        position: relative;
                        }
                        
                        .redBoxText {
                             position:absolute;
                        }

                        .redBoxText {
                            font-size: 10px;
                        }
                `}</style>              
                <style jsx>{`
                        .redBox {
                            top: ${yAxisValue}px;
                            left: ${xAxisValue}px;
                         }
                         .redBoxText {
                             top: ${yAxisValue}px;
                             left: ${textLeft}px;
                         }
                `}</style>
            </div>
        )
    }
}

export default RedBox;