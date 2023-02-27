import { ComponentState } from '../state/state';
import { Action, ActionType } from './actions';

const reducer_func = (
  state: ComponentState,
  action: Action
): ComponentState => {
  switch (action.type) {
    case ActionType.SET_RECEIVING_COUNTRY:
      return {
        ...state,
        receiving_country: action.payload,
      };

    case ActionType.SET_SENDING_COUNTRY:
      return {
        ...state,
        sending_country: action.payload,
      };

    case ActionType.SET_RECEIVING_AMOUNT:
      return {
        ...state,
        receiving_amount: action.payload,
      };

    default:
      return state;
  }
};

export default reducer_func;
