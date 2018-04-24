import * as constants from './constants';
import * as actions from './xAxis';
import y_axis_value from '../reducers/yAxis';

it('creates an action to set the x_axis', () => {
  const expectedAction = { type: constants.ADD_X_AXIS };
  expect(actions.addXaxis()).toEqual(expectedAction);
});

it('creates an action to set the x_axis', () => {
  const expectedAction = { type: constants.ADD_X_AXIS };
  expect(actions.addXaxis()).toEqual(expectedAction);
});

it('creates an action to add into the x_axis', () => {
  const expectedAction = { type: constants.MINUS_X_AXIS };
  expect(actions.minusXaxis()).toEqual(expectedAction);
});

