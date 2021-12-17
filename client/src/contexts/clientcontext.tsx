import { createContext, SetStateAction, Dispatch } from "react";
import { Client }from 'colyseus.js'

type Props = {
    client: Client | undefined,
    setClient: Dispatch<SetStateAction<Client | undefined>>
};

const ClientContext = createContext<Partial<Props>>({});

export { ClientContext };