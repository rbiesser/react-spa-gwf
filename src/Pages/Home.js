import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Header, Grid, Segment } from 'semantic-ui-react'

function Home() {
    return(
        <Container>
            <Image src='/img/home.png' fluid />
            
            <Grid style={{marginTop:50, marginBottom:50}}>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Segment size='massive' raised compact textAlign='center'>
                            <p>A student education program that is funded solely by the private sector.</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column />
                    <Grid.Column>
                        <Segment size='massive' raised compact textAlign='center'>
                            <p>A first-hand one-on-one experience for students and their environment.</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Container style={{marginTop:50, marginBottom:50}}>
                <Header as='h1' color='blue' content='About Our Foundation' />
                <p>The Gulf of Catalina Gray Whale Preservation & Education Foundation (GWF) educates children on the importance of the Gray Whale by creating an opportunity for students to engage in research.</p>
                <p>We are a non-profit organization led by scientists, naturalists, and educators whose goal it is to protect our environment and inspire future generations of environmentalists, scientists, and ocean stewards.</p>
                <Container textAlign='center'>
                    <Link to='/about-us' className='ui button primary' >Learn More</Link>
                </Container>
            </Container>
            
            <Container style={{marginTop:50, marginBottom:50}}>
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
        </Container>
    )
}

export default Home