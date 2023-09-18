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

type Props = {
  children?: React.ReactNode;
};
const MyRoot: React.FC<Props> = ({ children }) => {
  const state = useState<string>('');
  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

const App = () => {
  return (
    <MyRoot>
      <MyComponent />
    </MyRoot>
  );
};
