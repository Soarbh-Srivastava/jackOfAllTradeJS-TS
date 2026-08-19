import React, { createContext, useState, type PropsWithChildren } from 'react';
import * as Api from './api';
import type { Plan } from './types';
import { validators } from 'tailwind-merge';
import type { StreamOptions } from 'stream';

type PlansContextType = {
  plans: Plan[];
  createPlan: (title: string) => Promise<void>;
  updatePlan: (id: number, updatedPlan: Partial<Omit<Plan, 'id'>>) => Promise<void>;
  removePlan: (id: number) => Promise<void>;
};

const PlansContext = createContext<PlansContextType | null>(null as unknown as PlansContextType);
/*
export function dummyFunction(value: string | null) {
  if (value === null) throw new Error('This value is definatly a null');
  console.log(value);
  return null;
}
*/
//NOTE : when we are using context it can blow up if we pass something wrong and it will be difficult to debug too. so use a wrapper on createContext so that it can throw error and immedialty know where there is the error

export const creatBetterContext = <T,>() => {
  const Context = createContext<T | null>(null);
  const useConext = () => {
    const ctx = React.useContext(Context);
    if (ctx === null) {
      throw new Error('Context was not set. Woops');
    }
    return ctx;
  };
  return [useConext, Context.Provider] as const;
};

export const PlansProvider = ({ children }: PropsWithChildren) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const createPlan = async (title: string) => {
    const plan = await Api.createPlan(title);
    setPlans((prevPlans) => [...prevPlans, plan]);
  };

  // Improvement: Can we type updatedPlan better?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePlan = async (id: number, updatedPlan: any) => {
    const plan = await Api.updatePlan(id, updatedPlan);
    setPlans((prevPlans) => prevPlans.map((p) => (p.id === plan.id ? plan : p)));
  };

  const removePlan = async (id: number) => {
    const deleted = await Api.deletePlan(id);
    if (!deleted) return;
    setPlans((prevPlans) => prevPlans.filter((p) => p.id !== id));
  };

  return (
    <PlansContext.Provider value={{ plans, createPlan, updatePlan, removePlan }}>
      {children}
    </PlansContext.Provider>
  );
};
