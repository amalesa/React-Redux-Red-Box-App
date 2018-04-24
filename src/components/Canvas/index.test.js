import React from 'react';
import { shallow } from 'enzyme';
import { Canvas } from './index';
import yAxisValue from '../../reducers/yAxis';
import xAxisValue from '../../reducers/xAxis';

const props = {
  addYaxis: jest.fn(),
  minusYaxis: jest.fn(),
  addXaxis: jest.fn(),
  minusXaxis: jest.fn(),
  yAxisValue: 0,
  xAxisValue: 0,
};

const canvas = shallow(<Canvas {...props} />);

describe('<Canvas />', () => {
  it('renders', () => {
    expect(canvas).toMatchSnapshot();
  });

  it('displays the axis from props', () => {
    expect(canvas.find('.red-box-container').text()).toEqual('y: 0, x: 0');
  });
});

describe('when the user clicks the up event', () => {
  beforeEach(() => {
    canvas
      .find('.button.up')
      .simulate('click');
  });

  it('minusYaxis should be called', () => {
    expect(props.minusYaxis).toHaveBeenCalled();
  });
});

describe('when the user clicks the up event', () => {
  beforeEach(() => {
    canvas
      .find('.button.down')
      .simulate('click');
  });

  it('minusYaxis should be called', () => {
    expect(props.minusYaxis).toHaveBeenCalled();
  });
});

describe('click event', () => {
  it('on click down', () => {
    canvas
      .find('.button.down')
      .simulate('click');
    expect(props.minusYaxis).toHaveBeenCalled();
  });

  it('on click left', () => {
    canvas
      .find('.button.left')
      .simulate('click');
    expect(props.minusXaxis).toHaveBeenCalled();
  });

  it('on click right', () => {
    canvas
      .find('.button.right')
      .simulate('click');
    expect(props.addXaxis).toHaveBeenCalled();
  });
});

describe('click upevent', () => {
  it('on click down', () => {
    canvas
      .find('.button.down')
      .simulate('click');
    expect(props.minusYaxis).toHaveBeenCalled();
  });

  it('on click left', () => {
    canvas
      .find('.button.left')
      .simulate('click');
    expect(props.minusXaxis).toHaveBeenCalled();
  });

  it('on click right', () => {
    canvas
      .find('.button.right')
      .simulate('click');
    expect(props.addXaxis).toHaveBeenCalled();
  });
});
