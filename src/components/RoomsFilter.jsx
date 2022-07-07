import React, {useContext} from 'react';
import {RoomContext} from "../context/RoomContext";
import Title from "./shared/Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value])) ]
}

const RoomsFilter = ({rooms}) => {

    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, pets, breakfast} = useContext(RoomContext)

    let types = getUnique(rooms, 'type');
    types = ["all", ...types]

    let people = getUnique(rooms, "capacity")

    return (
        <section className="filter-container">
             <Title title="search-rooms" />
            <form className="filter-form">
            {/* Select type */}
           <div className="form-group">
               <label htmlFor="type">room type</label>
               <select onChange={handleChange}
                       name="type"
                       id="type"
                       value={type}
                       className="form-control" >
                   {
                       types.map((type,index) => {
                           return <option key={index} value={type}>{type}</option>
                       })
                   }
               </select>
           </div>

                {/* Select guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select onChange={handleChange}
                            name="capacity"
                            id="capacity"
                            value={capacity}
                            className="form-control" >
                        {
                            people.map((person,index) => {
                                return <option key={index} value={person}>{person}</option>
                            })
                        }
                    </select>
                </div>

                {/* Select room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input id="price"
                           value={price}
                           type="range"
                           name="price"
                           min={minPrice}
                           max={maxPrice}
                    onChange={handleChange} className="form-control"/>
                </div>

                {/* Select room size */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="minSize"
                               value={minSize}
                               className="size-input"
                               onChange={handleChange} />
                        <input type="number" name="maxSize" id="maxSize"
                               value={maxSize}
                               className="size-input"
                               onChange={handleChange} />
                    </div>
                </div>

                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input onChange={handleChange}
                               type="checkbox" name="breakfast"
                               id="breakfast" checked={breakfast}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input onChange={handleChange}
                               type="checkbox"
                               name="pets"
                               id="pets" checked={pets}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter;