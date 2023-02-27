import React from 'react';
import { ComponentState, initial_state } from '../state/state';
import { Action} from './actions';

export const AppContext = React.createContext<{
  state: ComponentState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initial_state,
  dispatch: () => undefined,
});

// export interface ContextType {
//   loading: boolean;
//   sending_country: string;
//   receiving_country: string;
//   receiving_amount: string | number;
// }

// export const initial_state: ContextType = {
//   loading: false,
//   sending_country: '',
//   receiving_country: '',
//   receiving_amount: '',
// };

// const AppContext = React.createContext<{
//   state: ContextType;
//   dispatch: React.Dispatch<ContextType>;
// }>({ state: initial_state, dispatch: () => undefined });

export default AppContext;
