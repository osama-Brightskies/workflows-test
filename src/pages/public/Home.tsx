import React, { useReducer } from "react";
import { Button } from "../../components/ui/button/button";

// Define action types
type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

// Define state type
type CounterState = number;

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Home: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>
        <div className="flex items-center space-x-6">
          <Button
            variant="destructive"
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            -
          </Button>
          <span className="text-2xl font-semibold text-gray-700">{count}</span>
          <Button
            variant="default"
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
  