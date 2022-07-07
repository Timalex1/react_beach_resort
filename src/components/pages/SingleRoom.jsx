import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom'
// import defaultBcg from '../../images/room-1.jpeg'
// import Hero from "../shared/Hero";
// import Banner from "../shared/Banner";
import {RoomContext} from "../../context/RoomContext";
import Layout from "../shared/layout";
import Hero from "../shared/Hero";
import Banner from "../shared/Banner";
import StyledHero from "../shared/StyledHero";


const SingleRoom = (props) => {
    const {getRoom} = useContext(RoomContext);
    const {slug} = useParams()
    const room = getRoom(slug)


    if (!room) {
        return (
            <Layout>
                <div className="error">
                    <h3>no such room exists</h3>
                    <Link to="/rooms" className="btn-primary">Back to
                        rooms</Link>
                </div>
            </Layout>
        )
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
    const [mainImg, ...defaultImg] = images;
    return <Layout>
        <StyledHero img={mainImg} >
        <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">Back to rooms</Link>
        </Banner>
    </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((image, index) => {
                    return <img key={index} src={image} alt={name}/>
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info</h3>
                    <h6>price : $${price}</h6>
                    <h6>size : ${size} SQFT</h6>
                    <h6>Max Capacity: { capacity > 1 ?`${capacity} people` : `${capacity} person`}</h6>
                    <h6>{pets ? "pets allowed" :"no pets allowed"}</h6>
                    <h6>{breakfast && "free Breakfast included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((extra, index) => {
                    return <li key={index}>- {extra}</li>
                })}
            </ul>
        </section>
    </Layout>
        }
export default SingleRoom;