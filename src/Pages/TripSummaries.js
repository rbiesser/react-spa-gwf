import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import TripSummariesTabPanel from '../Components/TripSummariesTabPanel'

export default function TripSummaries() {
    return(
        <Container>
            <Header as='h1' color='blue' content='Trip Summaries' />
            <p>Read our our captain and marine naturalist’s latest trip summaries below.</p>
            <TripSummariesTabPanel />
        </Container>
    )
}