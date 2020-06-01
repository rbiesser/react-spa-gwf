import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import tripSummaries from '../Data/TripSummaries'

function TripSummaries() {
    // sort descending
    tripSummaries.sort((a, b) => (a.index < b.index) ? 1 : -1)

    return(
        <Container content>
            <Header as='h1' color='blue' content='Trip Summaries' />
            <p>Read our our captain and marine naturalist’s latest trip summaries below.</p>
            {tripSummaries.map((tripSummary, index) => (
                <Container>
                    <h1>Trip {tripSummary.index}</h1>
                    <h2>{tripSummary.date} <small>with {tripSummary.school} / {tripSummary.students} students</small></h2>
                    <p><small>By {tripSummary.author.name}, {tripSummary.author.title}</small></p>
                    <p>Departure: {tripSummary.departure}</p>
                    <p>Weather: {tripSummary.weather}</p>
                    {tripSummary.log.map((entry, index) => (
                        <p>{entry}</p>
                    ))}
                    <h3>Total Sightings</h3>
                    <ul>
                    {tripSummary.sightings.map((sighting, index) => (
                        <li>{sighting}</li>
                    ))}
                    </ul>
                </Container>
            ))}
        </Container>
    )
}

export default TripSummaries