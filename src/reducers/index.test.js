import rootReducer from './index';

describe('rootReducer', () => {
  it('initalizes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ yAxisValue: 0, xAxisValue: 0 });
  });
});
