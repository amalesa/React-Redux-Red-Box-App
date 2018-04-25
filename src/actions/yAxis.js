import * as constants from './constants';

export const addYaxis = height => ({
        type: constants.ADD_Y_AXIS,
        height
    });

export const minusYaxis = height => ({
        type: constants.MINUS_Y_AXIS,
        height
    });

    export const resizeYaxis = height => ({
        type: constants.RESIZE_Y_AXIS,
        height
    });

