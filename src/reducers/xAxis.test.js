import xAxisReducer from './xAxis';
import xAxisReducer2 from './xAxis';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
  describe('when initializing', () => {
    const x_axis_value = 10;
    it('sets a balance', () => {
      expect(xAxisReducer(0, { type: constants.ADD_X_AXIS, x_axis_value })).toEqual(x_axis_value);
    });

    describe('then re-initalizeg', () => {
      it('reads the balance from cookies', () => {
        expect(xAxisReducer2(undefined, {})).toEqual(x_axis_value);
      });
    });
    describe('then re-initalizeg', () => {
      it('reads the balance from cookies', () => {
        expect(xAxisReducer2(undefined, {})).toEqual(x_axis_value);
      });
    });
  });

  it('add_x_axis', () => {
    const x_axis = 10;
    const initialState = 100;

    expect(xAxisReducer(initialState, { type: constants.ADD_X_AXIS, x_axis })).toEqual(initialState + 10);
  });

  it('minus_x_axis', () => {
    const x_axis = 10;
    const initialState = 100;

    expect(xAxisReducer(initialState, { type: constants.MINUS_X_AXIS, x_axis })).toEqual(initialState - 10);
  });
});

