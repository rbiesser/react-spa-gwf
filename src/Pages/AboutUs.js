import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import AboutAccordion from '../Components/AboutAccordion'

function About() {
    return(
        <Container>
            <Header as='h1' color='blue' content='About Our Foundation' />
            <p>The Gulf of Catalina Gray Whale Preservation &amp; Education Foundation (GWF) educates children on the importance of the Gray Whale by creating an opportunity for students to engage in research.</p>
            <p>We are a non-profit organization led by scientists, naturalists, and educators whose goal it is to protect our environment and inspire future generations of environmentalists, scientists, and ocean stewards.</p>
            
            <AboutAccordion />
        </Container>
    )
}

export default About