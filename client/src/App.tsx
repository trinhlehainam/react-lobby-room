import { useEffect, useState } from 'react';
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
  //

  return (
    <>
    <div className="bg-gray-400">
        <div className="text-white text-center text-4xl">
            {client_id}
        </div>
    </div>
    </>
  );
}

export default App;
