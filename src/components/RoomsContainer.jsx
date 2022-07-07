import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from '../context/RoomContext'
import Loading from "./Loading";

//
function RoomContainer({context}) {
    const {loading,sortedRooms, rooms } = context
    if(loading){
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )

}

//Using Consumer of the context to pass values in to the component

// import React from 'react';
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import {RoomConsumer} from '../context/RoomContext'
// import Loading from "./Loading";
//
// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                    return <Loading/>
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
// )
// }

// Use higher order function when you're using consumer in multiple
// components in the application
// export default withRoomConsumer(RoomContainer);

export default withRoomConsumer(RoomContainer);
