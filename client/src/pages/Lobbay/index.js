import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../../context/SocketProvider'
import { useNavigate } from 'react-router-dom'

const LobbayPage = () => {
    const [email, setEmail] = useState("")
    const [room, setRoom] = useState("")

    const socket = useSocket()
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(data => {
        const { email, room } = data
        navigate(`/room/${room}`)
    }, [navigate])

    useEffect(() => {
        socket.on('room:join', handleJoinRoom)
        return () => {
            socket.off('room:join')
        }
    }, [socket, handleJoinRoom])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        socket.emit('room:join', { email, room })
    },
        [email, room, socket],
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email </label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /><br />
                <label htmlFor='room'>Room Number</label>
                <input
                    type='text'
                    id='room'
                    value={room}
                    onChange={e => setRoom(e.target.value)}
                /><br />
                <button>Join </button>
            </form>
        </div>
    )
}

export default LobbayPage