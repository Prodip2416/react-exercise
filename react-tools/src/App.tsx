import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './fetchData/Fetch';
import Axios from './fetchData/Axios';
import SWR from './fetchData/SWR';
import ReactQuery from './fetchData/ReactQuery';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true
      }
    }
  });
  return (
    <div className="App">
      {/* <Fetch /> */}
      {/* <Axios/> */}
      {/* <Suspense fallback={<h1>Loading ....</h1>}>
        <SWR />
      </Suspense> */}
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading ....</h1>}>
          <ReactQuery />
          <ReactQuery />
          <ReactQuery />
          <ReactQuery />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
