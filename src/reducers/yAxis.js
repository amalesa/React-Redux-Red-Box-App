import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const Y_AXIS_COOKIE = 'Y_AXIS_COOKIE';

const yAxisValue = (state = 0, action) => {
  let yAxisValue;
  switch (action.type) {
    case constants.ADD_Y_AXIS:
      yAxisValue = (state + 10) > (action.height - 10) ? state : state + 10;
      break;
    case constants.MINUS_Y_AXIS:
      yAxisValue = (state - 10) < 0 ? 0 : state - 10;
      break;
    default:
      yAxisValue = parseInt(read_cookie(Y_AXIS_COOKIE), 10) || state;
      break;
  }

  bake_cookie(Y_AXIS_COOKIE, yAxisValue);
  return yAxisValue;
};

export default yAxisValue;
