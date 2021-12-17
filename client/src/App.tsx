import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Colyseus from 'colyseus.js'

import { Home } from './routes/home'
import { Start } from './routes/private'
import { ClientContext } from './contexts/clientcontext';
import { AvailableRooms } from './routes/availablerooms';
import { MyRoom } from './routes/myroom';

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
  <ClientContext.Provider  value={clientContext}>
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privategame" element={<Start />} />
          <Route path="/availablerooms" element={<AvailableRooms />} />
          <Route path="/myroom" element={<MyRoom />} />
    </Routes>
  </BrowserRouter>
  </ClientContext.Provider>
  );
}

export default App;
