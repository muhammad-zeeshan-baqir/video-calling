import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client"

const SocketContext = createContext(null)

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}
export const BASE_URL = process.env.REACT_APP_API_URL

export const SocketProvder = (props) => {
    const socketHost = useMemo(() => io(BASE_URL), [])
    return (
        <SocketContext.Provider value={socketHost}>
            {props.children}
        </SocketContext.Provider>
    )
}