import React, {createContext, useEffect, useState} from 'react'
import items from '../data'

export const RoomContext = createContext();

const RoomContextProvider = ({children}) => {

    const [rooms, setRooms] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        let rooms = formatData(items)
        setRooms(rooms)
        setFeaturedRooms(rooms.filter(room => room.featured === true))
        setSortedRooms(rooms)
        setLoading(false)
    }, [])


    function formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item .fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })

        return tempItems
    }

    const contextValues = {rooms, sortedRooms, featuredRooms, loading}

    return (

        <RoomContext.Provider value={contextValues}>
            {children}
        </RoomContext.Provider>
    )

}

export default RoomContextProvider;