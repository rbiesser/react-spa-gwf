import React from 'react'
import { Container } from 'semantic-ui-react'

export default function TripSummary(props) {

    return(
        <Container>
            <h1>Trip {props.event.index}</h1>
            <h2>{props.event.date} <small>with {props.event.school} / {props.event.students} students</small></h2>
            <p><small>By {props.event.author.name}, {props.event.author.title}</small></p>
            <p>Departure: {props.event.departure}</p>
            <p>Weather: {props.event.weather}</p>
            {props.event.log.map((entry, index) => (
                <p key={index}>{entry}</p>
            ))}
            <h3>Total Sightings</h3>
            <ul>
            {props.event.sightings.map((sighting, index) => (
                <li key={index}>{sighting}</li>
            ))}
            </ul>
        </Container>
    )
}