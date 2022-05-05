import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} alt="" className="card--image"/>
            <div className="card--stats">
                <img src='./images/star.png' alt="star" className="card--star"/>
                <span>{props.review}</span>
                <span className="grey">{props.rating}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.Name}</p>
            <p>From $136</p>
        </div>
    )
}