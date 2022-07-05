import React from 'react';
import Layout from "../shared/layout";
import Hero from "../shared/Hero";
import Banner from "../shared/Banner";
import {Link} from "react-router-dom";
import Services from "../shared/Services";
import FeaturedRooms from "../FeaturedRooms";

const Home = () => {

    return (
        <Layout>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
                    <Link to='/rooms' className='btn-primary'>Our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </Layout>
    )
}

export default Home;