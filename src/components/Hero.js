import React from "react";

export default function Hero(props) {
    return(
        <section className="hero">
            <img src="./images/kid-g498194cab_1920.jpg" alt="some-img" className="hero--photo"/>
            <h1>{props.head}</h1>
            <p>{props.para}</p>
        </section>
    )
}