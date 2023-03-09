import React, { useContext, useState } from 'react';
import { Currency } from '../Currency';
import Button from '../form/Button';
import AppContext from '../../context/app_context';
import axios from 'axios';
import { ActionType } from '../../context/actions';

export const Converter = (props: {
  buttonBG?: string;
  buttonHeight?: string;
}) => {
  const { state, dispatch } = useContext(AppContext);

  const [send, set_send] = useState('');
  // @ts-ignore
  const [_, set_receive] = useState('');

  const handle_conversion = async () => {
    console.log(state);
    if (send && state?.receiving_country && state?.sending_country) {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${state.sending_country.toLowerCase()}/${state.receiving_country.toLowerCase()}.json`
        );
        if (
          response.data.hasOwnProperty(state.receiving_country.toLowerCase())
        ) {
          // calculate total worth
          const total =
            parseInt(send) *
            Math.round(response.data[state.receiving_country.toLowerCase()]);

          // format money
          const format = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

          // dispatch convertion to context
          dispatch({
            type: ActionType.SET_RECEIVING_AMOUNT,
            payload: format,
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('choose please');
    }
  };

  return (
    <div className="w-full md:w-fit bg-none">
      <Currency
        title={'You send'}
        value={send}
        on_change={set_send}
        read_only={false}
        type={'text'}
      />
      <div className="h-10 border-l-2 border-dotted ml-6 bg-slate-800 w-fit"></div>
      <Currency
        title={'You receive'}
        read_only={true}
        value={state.receiving_amount.toString()}
        type={'text'}
        on_change={set_receive}
      />
      <Button
        title={'Convert'}
        on_click={handle_conversion}
        buttonBG={props.buttonBG || '#3B82F6'}
        buttonHeight={props.buttonHeight || '48px'}
      />
    </div>
  );
};
