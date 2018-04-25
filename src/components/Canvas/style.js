import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'canvas': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'right',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'alignItems': 'center'
  },
  'canvas-board': {
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#26282E' }, { 'unit': 'string', 'value': 'solid' }],
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'height': [{ 'unit': 'vh', 'value': 90 }],
    'marginRight': [{ 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  'controll-pannel': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between'
  },
  'button': {
    'margin': [{ 'unit': 'em', 'value': 0.1 }, { 'unit': 'em', 'value': 0.1 }, { 'unit': 'em', 'value': 0.1 }, { 'unit': 'em', 'value': 0.1 }],
    'borderRadius': '0.1em',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'backgroundColor': '#4CAF50',
    'color': '#fff',
    'textAlign': 'center'
  },
  'red-box-container': {
    'color': '26282E',
    'position': 'absolute'
  },
  'button:action': {
    'backgroundColor': '#4CAF50'
  },
  'red-box': {
    'background': '#EB4769',
    'height': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative'
  },
  'redBoxText': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  }
});
