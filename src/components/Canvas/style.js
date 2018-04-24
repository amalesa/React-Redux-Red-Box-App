import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'canvas': {
    'display': 'flex',
    'alignItems': 'right',
    'fontFamily': 'Arial, Helvetica, sans-serif'
  },
  'canvas-board': {
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#26282E' }, { 'unit': 'string', 'value': 'solid' }],
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'height': [{ 'unit': 'vh', 'value': 90 }],
    'marginRight': [{ 'unit': 'em', 'value': 1 }]
  },
  'controll-pannel': {
    'display': 'flex',
    'flexDirection': 'column'
  },
  'button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0.1em',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'backgroundColor': '#4CAF50',
    'color': '#fff',
    'textAlign': 'center'
  },
  'red-box-container': {
    'color': '26282E',
    'position': 'relative',
    'position': 'absolute'
  },
  'button:action': {
    'backgroundColor': '#4CAF50'
  },
  'red-box': {
    'background': '#EB4769',
    'height': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 10 }]
  }
});
