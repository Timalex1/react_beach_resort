import React, {Component, createContext, useEffect, useState} from 'react'
// import items from '../data'
import Client from '../Contentful'

export const RoomContext = createContext();

class RoomContextProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    };

    getData = async () => {
        try{
            //working with Contentful
            let response = await Client.getEntries({
                content_type: "beachResort",
                order: "sys.createdAt"
            })
            console.log(response.items)

            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter( room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))

            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                price: maxPrice,
                maxPrice,
                maxSize,
                loading: false
            })
        }
        catch(err) {
            console.log(err)
}
}

    componentDidMount() {
        // to get data from Contentful
        this.getData();
    }


    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(r => r.slug === slug)
        return room;
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item .fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })

        console.log(tempItems)
        return tempItems
    }
//

   handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked
            : target.value

       this.setState(
           {
               [name] : value
           },
       this.filterRooms
       );

    };

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state

        capacity = Number(capacity)
        price = Number(price)
        let tempRooms = [...rooms];

        //filtering by TYPE
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //filtering by CAPACITY
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        //filtering by PRICE
        tempRooms = tempRooms.filter(room => room.price <= price)

        //Filter by Size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //Filter by breakfast
        if (breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        //Filter by pets
        if (pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({
            sortedRooms: tempRooms
        })
        return tempRooms;
    };

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }

}

// const RoomContextProvider = ({children}) => {
//
//     const [rooms, setRooms] = useState([])
//     const [sortedRooms, setSortedRooms] = useState([])
//     const [featuredRooms, setFeaturedRooms] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [type, setType] = useState("all")
//     const [capacity, setCapacity] = useState(1)
//     const [price, setPrice] = useState(0)
//     const [minPrice, setMinPrice] = useState(0)
//     const [maxPrice, setMaxPrice] = useState(0)
//     const [minSize, setMinSize] = useState(0)
//     const [maxSize, setMaxSize] = useState(0)
//     const [breakfast, setBreakfast] = useState(false)
//     const [pets, setPets] = useState(false)
//
//     const getRoom = (slug) => {
//         let tempRooms = [...rooms]
//         const room = tempRooms.find(r => r.slug === slug)
//         return room;
//     }
//
//     useEffect(() => {
//         let rooms = formatData(items)
//         setRooms(rooms)
//         setFeaturedRooms(rooms.filter(room => room.featured === true))
//         setSortedRooms(rooms)
//         setLoading(false)
//         setMaxPrice(Math.max(...rooms.map(room => room.price)))
//         setMaxSize(Math.max(...rooms.map(room => room.size)))
//     }, [])
//
//
//     const formatData = (items) => {
//         let tempItems = items.map(item => {
//             let id = item.sys.id
//             let images = item .fields.images.map(image => image.fields.file.url)
//             let room = {...item.fields, images, id}
//             return room
//         })
//
//         return tempItems
//     }
//
//     const handleChange = (event) => {
//         const target = event.target
//         const name = target.name
//         const value = event.type === 'checkbox' ? target.checked
//             : target.value
//
//         console.log(value)
//
//         setType(value);
//
//         console.log(type)
//         // setCapacity(value)
//
//         //call to filter the rooms
//         // filterRooms();
//     }
//
//     const filterRooms = () => {
//
//         console.log(type)
//         // let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} =
//
//         let tempRooms = [...rooms];
//         if (type != "all"){
//             tempRooms = tempRooms.filter(room => room.type === type)
//         }
//
//         setSortedRooms(tempRooms);
//     }
//
//
//     const contextValues = {
//         type,
//         capacity,
//         price,
//         minPrice,
//         maxPrice,
//         minSize,
//         maxSize,
//         breakfast,
//         pets,
//         rooms,
//         sortedRooms,
//         featuredRooms,
//         loading,
//         getRoom,
//         handleChange
//     }
//
//     return (
//         <RoomContext.Provider value={contextValues}>
//             {children}
//         </RoomContext.Provider>
//     )
// }
//
const RoomConsumer = RoomContext.Consumer;
//
//
// /*
// * Using of higher
// * order functions to pass values to the companent//
// * */
//
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
//
export {RoomContextProvider, RoomConsumer};