import yAxisReducer from './yAxis';
import yAxisReducer2 from './yAxis';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
  describe('when initializing', () => {
    const yAxisValue = 10;
    it('sets a balance', () => {
      expect(yAxisReducer(0, { type: constants.ADD_Y_AXIS, yAxisValue })).toEqual(yAxisValue);
    });
    it('sets a balance', () => {
      expect(yAxisReducer(0, { type: constants.ADD_X_AXIS, yAxisValue })).toEqual(yAxisValue);
    });

    describe('then re-initalizeg', () => {
      it('reads the balance from cookies', () => {
        expect(yAxisReducer2(undefined, {})).toEqual(yAxisValue);
      });
    });
  });

  it('addYaxis', () => {
    const initialState = 100;

    expect(yAxisReducer(initialState, { type: constants.ADD_Y_AXIS })).toEqual(initialState + 10);
  });

  it('minusYaxis', () => {
    const initialState = 100;

    expect(yAxisReducer(initialState, { type: constants.MINUS_Y_AXIS })).toEqual(initialState - 10);
  });
});

