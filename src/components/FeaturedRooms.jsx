import React, {useContext} from 'react'
import {RoomContext} from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./shared/Room";
import Title from "./shared/Title";

const FeaturedRooms = () => {

    const {featuredRooms, loading} = useContext(RoomContext);

    const rooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        <section className="featured-rooms">
            <Title title="Featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms }
            </div>
        </section>
    )
}

export default FeaturedRooms;