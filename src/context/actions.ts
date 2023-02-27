export enum ActionType {
  SET_RECEIVING_COUNTRY = 'SET_RECEIVING_COUNTRY',
  SET_SENDING_COUNTRY = 'SET_SENDING_COUNTRY',
  SET_RECEIVING_AMOUNT = 'SET_RECEIVING_AMOUNT',
}

export interface SET_RECEIVING_COUNTRY {
  type: ActionType.SET_RECEIVING_COUNTRY;
  payload: string;
}

export interface SET_SENDING_COUNTRY {
  type: ActionType.SET_SENDING_COUNTRY;
  payload: string;
}

export interface SET_RECEIVING_AMOUNT {
  type: ActionType.SET_RECEIVING_AMOUNT;
  payload: string | number;
}

export type Action =
  | SET_RECEIVING_COUNTRY
  | SET_SENDING_COUNTRY
  | SET_RECEIVING_AMOUNT;
