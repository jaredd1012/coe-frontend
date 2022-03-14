/* Framework */
import { getType } from 'typesafe-actions';

/* Data */
import * as actionType from '../actions/actions';
import { LayoutStateType } from '../types';
// import { fetchLoginAsync } from '../actions/actions';

const intialState: LayoutStateType = {
    sidbarOpened: true,
};

const reducer = (state = intialState, action: actionType.layoutTypes): LayoutStateType => {
    switch (action.type) {
        case getType(actionType.toggleSidebar):
            return { ...state, sidbarOpened: !state.sidbarOpened };
        default:
            return state;
    }
};

export default reducer;
