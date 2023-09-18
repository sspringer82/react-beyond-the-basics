import React, { useEffect, useState } from 'react';

function useName(): { name: string } {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setName('Rambo!');
    }, 1000);
  }, []);

  // return [name];
  return { name };
}

const MyComponent: React.FC = () => {
  const { name: bezeichnung } = useName();
  return <div>{bezeichnung}</div>;
};
