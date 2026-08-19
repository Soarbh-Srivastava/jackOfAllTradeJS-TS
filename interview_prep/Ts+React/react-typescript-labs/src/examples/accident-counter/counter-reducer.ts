export type CounterState = {
  count: number;
};

export const initialState: CounterState = {
  count: 0,
};

type ActionType = {
  type: string;
  payload?: unknown;
};

interface IncrementAction extends ActionType {
  type: 'increment';
  payload?: never;
}
interface DecrementAction extends ActionType {
  type: 'decrement';
  payload?: never;
}
interface ResetAction extends ActionType {
  type: 'reset';
  payload?: never;
}
interface SetCountAction extends ActionType {
  type: 'set-count';
  payload: number;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction | SetCountAction;

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  console.log({ action });
  const { count } = state;

  if (action.type === 'increment') {
    return { count: count + 1 };
  }

  if (action.type === 'decrement') {
    return { count: count - 1 };
  }

  if (action.type === 'reset') {
    return initialState;
  }

  if (action.type === 'set-count') {
    return { count: action.payload };
  }

  return state;
};
