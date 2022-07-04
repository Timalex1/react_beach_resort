import React from 'react';
import Hero from "../shared/Hero";
import Layout from "../shared/layout";
import {Link} from "react-router-dom";
import Banner from "../shared/Banner";

const Rooms = () => {
    return (
        <Layout>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to='/' className='btn-primary'>Return home</Link>
                </Banner>
            </Hero>
        </Layout>
    )
}

export default Rooms;