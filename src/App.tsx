import React from 'react';
import List from './List';
import Form from './Form';
import { PersonProvider } from './PersonProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PersonProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </PersonProvider>
    </BrowserRouter>
  );
};

export default App;
