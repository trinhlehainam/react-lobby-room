import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Colyseus from 'colyseus.js'

import { Home } from './routes/home'
import { Start } from './routes/private'
import { ClientContext } from './contexts/clientcontext';

const App = () => {
  const [client, setClient] = useState<Colyseus.Client>();
  
  // Init
  useEffect(() => {
    const client = new Colyseus.Client("ws://localhost:3000");
    setClient(client);
  }, []);
  //

  const clientContext = {
    client, setClient
  }

  return (
  <BrowserRouter>
    <Routes>
        <ClientContext.Provider  value={clientContext}>
          <Route path="/" element={<Home />} />
          <Route path="/privategame" element={<Start />} />
        </ClientContext.Provider>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
