export const createRoom = (topic, roomName, description) => {
    const room = { topic, roomName, description };
    console.log(room);
    return fetch('/api/rooms', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(room)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const updateRoom = (id, topic, roomName, description) => {
    const room = { topic, roomName, description };
    console.log(room);
    return fetch(`/api/rooms/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(room)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}


export const getAllRooms = () => {
    return fetch('/api/rooms')
        .then(res => res.json())
        .catch(err => console.log(err))
}


export const getSingleRoom = (id) => {
    return fetch(`/api/rooms/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}