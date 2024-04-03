import { createContext, useEffect, useState } from "react";
import { getAllRooms } from "../api/room.api";

export const RoomContext = createContext({
    rooms: [],
    setRooms: () => { }
});


export const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);

    const getRoomFunction = async () => {
        await getAllRooms().
            then((data) => setRooms(data.rooms))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getRoomFunction();
    }, []);

    const value = { rooms };
    return (
        <RoomContext.Provider value={value}>
            {children}
        </RoomContext.Provider>
    )
}