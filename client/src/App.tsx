import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Colyseus from 'colyseus.js'

import { Home } from './routes/home'
import { Start } from './routes/start'

function App() {
  const [client_id, setClientId] = useState('');
  
  // Init
  useEffect(() => {
    const client = new Colyseus.Client("ws://localhost:3000");
    client.joinOrCreate("MyRoom")
    .then((room) => {
      room.onMessage("INIT_ID", (message: string) => {
         setClientId(message);
      });
    });
  }, []);
  //

  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
