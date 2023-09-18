import { createContext, useContext, useState } from 'react';

const MyContext = createContext(null);

const MyComponent = () => {
  const context = useContext(myContext);

  return <div>{context}</div>;
};

const myRoot = () => {
  const state = useState();
  const [state, setState] = useState();
  return (
    <MyContext.Provider value={state}>
      <MyComponent />
    </MyContext.Provider>
  );
};
