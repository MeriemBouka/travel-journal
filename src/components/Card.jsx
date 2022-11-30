import React from "react"
import"../style/card.css"

export default function Card(props){
    const capitalLocation = props.item.location.toUpperCase()
    return(
        <div className="card">
           <img className="card-img" src={`images/${props.item.imageUrl}`}alt={props.item.title}/>
           <div className="informations">
            <img className="maps-icon" src="images/maps.png" alt="Map icon"/><span className="card-location">{capitalLocation}</span><a className="card-maps" a target="_blank" rel="noopener noreferrer" href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h1 className="card-title">{props.item.title}</h1>
            <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card-description">{props.item.description}</p>
           </div> 
        </div>
    )
}