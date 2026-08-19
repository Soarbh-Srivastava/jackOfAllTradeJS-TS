export const initialState = {
  count: 0,
};

type ActionType = {
  type: string;
  payload: unknown;
};

interface IncrementAction extends ActionType {
  type: 'increment';
  payload: never;
}
interface DecrementAction extends ActionType {
  type: 'decrement';
  payload: never;
}
interface SetCountAction extends ActionType {
  type: 'set-count';
  payload: number;
}

export type CounterAction = IncrementAction | DecrementAction | SetCountAction;

export const counterReducer = (state = initialState, action: CounterAction) => {
  console.log({ action });
  const { count } = state;

  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'decrement') {
    const newCount = count - action.payload;
    return { count: newCount, draftCount: newCount };
  }
  if (action.type === 'set-count') {
    const newCount = action.payload;
    return { count: newCount };
  }

  return state;
};
