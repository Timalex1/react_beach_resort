import React, {useState} from 'react';
import Title from "./Title";
import {FaHiking, FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {

    const [services, setServices] = useState([{
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia sit soluta! In\n" +
            "                non, saepe? Accusamus accusantium adipisci consequuntur eius mollitia sunt vitae. Commodi deleniti\n" +
            "                magnam molestias non quas quasi!"
    },
        {
            icon: <FaHiking />,
            title: "endless hiking",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia sit soluta! In\n" +
                "                non, saepe? Accusamus accusantium adipisci consequuntur eius mollitia sunt vitae. Commodi deleniti\n" +
                "                magnam molestias non quas quasi!"
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia sit soluta! In\n" +
                "                non, saepe? Accusamus accusantium adipisci consequuntur eius mollitia sunt vitae. Commodi deleniti\n" +
                "                magnam molestias non quas quasi!"
        },
        {
            icon: <FaBeer />,
            title: "strong as the beer",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia sit soluta! In\n" +
                "                non, saepe? Accusamus accusantium adipisci consequuntur eius mollitia sunt vitae. Commodi deleniti\n" +
                "                magnam molestias non quas quasi!"
        },
    ])

    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((item,index) => {
                    return (
                        <article className="service" key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services;