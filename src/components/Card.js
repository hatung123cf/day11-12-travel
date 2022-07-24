import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-image"/>
            <div className="content">
                <div className="line1">
                    <i className="fa-solid fa-location-pin"></i>
                    <div className="card-location">{props.location}</div>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-title">{props.title}</div>
                <div className="card-date">{props.startDate} - {props.endDate}</div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}