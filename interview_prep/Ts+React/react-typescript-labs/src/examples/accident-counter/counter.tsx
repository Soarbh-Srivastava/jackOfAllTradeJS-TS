import { Card } from '$/common/components/card';
import React, { useReducer, useState } from 'react';
import { Button } from './button';
import { counterReducer, initialState, type CounterAction } from './counter-reducer';

type CounterControllerProps = {
  dispatch: React.Dispatch<CounterAction>;
};

type FormControllerProps = {
  draftCount: number;
  setDraftCount: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<CounterAction>;
};

const CounterController = ({ dispatch }: CounterControllerProps): React.ReactNode => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</Button>
    </div>
  );
};

const FormController = ({ draftCount, setDraftCount, dispatch }: FormControllerProps) => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'set-count', payload: draftCount });
      }}
    >
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        onChange={(e) => setDraftCount(e.target.valueAsNumber)}
        value={draftCount}
      />
      <Button>Update Counter</Button>
    </form>
  );
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [draftCount, setDraftCount] = useState<number>(state.count);
  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <CounterController dispatch={dispatch} />
      <FormController draftCount={draftCount} setDraftCount={setDraftCount} dispatch={dispatch} />
    </Card>
  );
};
