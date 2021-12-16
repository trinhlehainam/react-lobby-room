import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import * as Colyseus from 'colyseus.js'

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

  return (
    <>
    <div className='bg-blue-900'>

    </div>
    </>
  );
}

export default App;
