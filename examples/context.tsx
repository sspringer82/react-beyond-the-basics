import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const MyContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  '',
  () => '',
]);

const MyComponent = () => {
  const [state] = useContext(MyContext);

  return <div>{state}</div>;
};

const MyRoot: React.FC = () => {
  const state = useState<string>('');
  return (
    <MyContext.Provider value={state}>
      <MyComponent />
    </MyContext.Provider>
  );
};
