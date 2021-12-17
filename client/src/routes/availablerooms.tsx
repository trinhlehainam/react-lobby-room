import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { RoomAvailable } from 'colyseus.js'

import { ClientContext } from "../contexts/clientcontext";

export const AvailableRooms = () => {
    const {client} = useContext(ClientContext);
    const [avaiRooms, setAvaiRooms] = useState<RoomAvailable[]>([]);

    useEffect(() => {
        if (client) {
            client.getAvailableRooms()
            .then((rooms) => {
                setAvaiRooms(rooms);
            })
        };
    }, []);

    return (
        <div className="bg-black flex flex-col min-h-screen justify-center items-center">
            <div className="relative bg-gray-400 flex flex-col w-1/4 my-auto space-y-4 p-4">
                {avaiRooms.map((room) => (
                    <div 
                    className="bg-blue-800 text-white text-center text-4xl border-4 border-yellow-200 rounded hover:scale-125 hover:bg-blue-400"
                    onClick={() => {
                        client?.joinById(room.roomId);
                    }}
                    >
                        <Link to="/myroom">
                            {`RoomId: ${room.roomId} Available: ${room.clients}/${room.maxClients}`}
                        </Link>
                    </div>
                ))}
                <div className="absolute bg-red-600 right-0 top-0 border-2 border-yellow-300 hover:scale-150 hover:bg-red-300 w-10 h-10 p-4 -translate-y-6 translate-x-2 flex justify-center items-center">
                <Link className='text-white text-center text-2xl' to="/privategame">X</Link>
            </div>
            </div>
        </div>
    );
}