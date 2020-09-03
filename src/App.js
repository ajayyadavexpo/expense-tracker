import React from 'react';

import Balance from './components/Balance';
import TransactionDetail from './components/TransactionDetail';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';


import './App.css';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <div className="container shadow pt-3 pl-5 pr-5 pb-2 mt-2">
          <h2 className="text-center">Expense Tracker</h2>
          <hr />

            <div className="row">
              <div className="col-sm-4 p-2">
                <div className="balance shadow">
                  <Balance />
                </div>
              </div>
              <div className="col-sm-8">
                <TransactionDetail />    
                <AddTransaction />
              </div>
            </div>
            <hr />
            <div>
              <TransactionList />
            </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
