import * as constants from './constants';
import * as actions from './yAxis';

it('creates an action to set the yAxis', () => {
  const expectedAction = { type: constants.ADD_Y_AXIS };
  expect(actions.addYaxis()).toEqual(expectedAction);
});
it('creates an action to add into the yAxis', () => {
  const expectedAction = { type: constants.ADD_Y_AXIS };
  expect(actions.addYaxis()).toEqual(expectedAction);
});

it('creates an action to minus into the yAxis', () => {
  const expectedAction = { type: constants.MINUS_Y_AXIS };
  expect(actions.minusYaxis()).toEqual(expectedAction);
});

