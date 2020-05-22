import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Header, Grid } from 'semantic-ui-react'

function Home() {
    return(
        <Container>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
            
            <segment>
                <p>A student education program that is funded solely by the private sector.</p>
            </segment>
            <segment>
                <p>A first-hand one-on-one experience for students and their environment.</p>
            </segment>

            <Header as='h1' color='blue' content='About Our Foundation' />
            <p>The Gulf of Catalina Gray Whale Preservation & Education Foundation (GWF) educates children on the importance of the Gray Whale by creating an opportunity for students to engage in research.</p>
            <p>We are a non-profit organization led by scientists, naturalists, and educators whose goal it is to protect our environment and inspire future generations of environmentalists, scientists, and ocean stewards.</p>
            <Link to='/about' className='ui button primary'>Learn More</Link>
            
            <Header as='h1' color='blue' content='Contributors' />
            
            <Grid>
                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Home