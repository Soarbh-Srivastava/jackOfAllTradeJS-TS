import { Card } from '$/common/components/card';
import React, { useReducer, useState, type FormEvent } from 'react';
import { Button } from './button';
import { counterReducer, initialState } from './counter-reducer';

type CounterControllerProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type FormControllerProps = CounterControllerProps & {
  draftCount: number;
  setDraftCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterController = ({ setCount }: CounterControllerProps): React.ReactNode => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => setCount((prev) => prev - 1)}>➖ Decrement</Button>
      <Button onClick={() => setCount(0)}>🔁 Reset</Button>
      <Button onClick={() => setCount((prev) => prev + 1)}>➕ Increment</Button>
    </div>
  );
};

const FormController = ({ draftCount, setCount, setDraftCount }: FormControllerProps) => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setCount(draftCount);
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
  const [count, setCount] = useState<number>(0);
  const [draftCount, setDraftCount] = useState<number>(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterController setCount={setCount} />
      <FormController draftCount={draftCount} setCount={setCount} setDraftCount={setDraftCount} />
    </Card>
  );
};
