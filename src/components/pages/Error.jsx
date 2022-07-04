import React from 'react';
import Hero from "../shared/Hero";
import Layout from "../shared/layout";
import {Link} from "react-router-dom";
import Banner from "../shared/Banner";

export default function Error (){
    return (
        <Layout>
            <Hero>
                <Banner title="404" subtitle="Page not found">
                    <Link to='/' className='btn-primary'>Return home</Link>
                </Banner>
            </Hero>
        </Layout>
    )
}