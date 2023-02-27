import React, { useReducer } from 'react';
import AppContext from './app_context';
import reducer_fun from './reducer_func';
import { initial_state } from '../state/state';

interface Type {
  children: React.ReactNode;
}

const AppState = (props: Type) => {
  // const initial_state = {
  //   loading: false,
  //   sending_country: '',
  //   receiving_country: '',
  //   receiving_amount: '',
  // };

  const [state, dispatch] = useReducer(reducer_fun, initial_state);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
