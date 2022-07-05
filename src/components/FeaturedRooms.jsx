import React, {useContext} from 'react'
import {RoomContext} from "../context/RoomContext";

const FeaturedRooms = () => {

    const {rooms, sortedRooms, featuredRooms, loading} = useContext(RoomContext);

    console.log(rooms)

    return (
        <div>
            <h1>This featured rooms {}</h1>
        </div>
    )
}

export default FeaturedRooms;