import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../contexts/clientcontext"

export const MyRoom = () => {
    const {client} = useContext(ClientContext);
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        if (client) {
            client.create("MyRoom")
            .then((room) => {
                setRoomId(room.id);
            });
        }
    }, []);

    return (
        <div className="bg-black flex flex-col min-h-screen justify-center items-center">
            <div className="bg-gray-400 flex flex-col w-1/4 my-auto space-y-4 p-4">
                {roomId}
            </div>
        </div>
    )
}