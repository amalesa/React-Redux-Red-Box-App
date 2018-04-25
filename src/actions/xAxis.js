import * as constants from './constants';

export const addXaxis = width => ({
  type: constants.ADD_X_AXIS,
  width
});

export const minusXaxis = width => ({
  type: constants.MINUS_X_AXIS,
  width
});

export const resizeXaxis = width => ({
  type: constants.RESIZE_X_AXIS,
  width
});

