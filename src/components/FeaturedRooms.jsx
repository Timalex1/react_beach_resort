import React, {useContext} from 'react'
import {RoomContext} from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./shared/Room";
import Title from "./shared/Title";

const FeaturedRooms = () => {

    const {rooms, sortedRooms, featuredRooms, loading} = useContext(RoomContext);

    const fRoomsList = featuredRooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        <section className="featured-rooms">
            <Title title="Featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : fRoomsList }
            </div>
        </section>
    )
}

export default FeaturedRooms;