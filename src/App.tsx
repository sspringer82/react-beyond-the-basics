import React from 'react';
import List from './List';
import Form from './Form';
import { PersonProvider } from './PersonProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LanguageSwitcher from './LanguageSwitcher';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageSwitcher />
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
    </QueryClientProvider>
  );
};

export default App;
