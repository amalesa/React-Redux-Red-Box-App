import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const X_AXIS_COOKIE = 'X_AXIS_COOKIE';

const xAxisValue = (state = 0, action) => {
  let xAxisValue;
  switch (action.type) {
    case constants.ADD_X_AXIS:
      xAxisValue = (state + 10) > (action.width - 10) ? state : state + 10;
      break;
    case constants.MINUS_X_AXIS:
      xAxisValue = (state - 10) < 0 ? 0 : state - 10;
      break;
    default:
      xAxisValue = parseInt(read_cookie(X_AXIS_COOKIE), 10) || state;
      break;
  }

  bake_cookie(X_AXIS_COOKIE, xAxisValue);
  return xAxisValue;
};

export default xAxisValue;
