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
        <table>
            <tr>
                <th>Players</th>
                <th>RoomId</th>
                <th><span className="sr-only">Join</span></th>
            </tr>
            {avaiRooms.map((room) => (
                <tr>
                    <td>{room.roomId}</td>
                    <td>{`${room.clients}/${room.maxClients}`}</td>
                    <td>Join</td>
                </tr>
            ))}
        </table>
           );
}
