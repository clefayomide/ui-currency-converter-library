export interface ComponentState {
  loading: boolean;
  sending_country: string;
  receiving_country: string;
  receiving_amount: string | number;
}

export const initial_state: ComponentState = {
  loading: false,
  sending_country: '',
  receiving_country: '',
  receiving_amount: '',
};
