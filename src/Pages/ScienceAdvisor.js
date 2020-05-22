import React from 'react'
import { Container, Header, Grid, Image } from 'semantic-ui-react'

function ScienceAdvisor() {
    return(
        <Container>
            <Header as='h1' color='blue' content='Science Advisor' />
            {/* <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column> */}
                        <Header as='h2' content='NONA REIMER' />
                        <p>Science Advisor</p><br />
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' floated='right' size='small' />
                        <p>Nona is a graduate of UC Santa Barbara with a degree in environmental studies. She taught 31 years for Capistrano Unified School District where she served as a Master Teacher and Science Mentor. She served for four years as the Orange County CREEC (CA Regional Environmental Eduction) Coordinator for the CA Dept of Education. Twice Teacher of the Year, Orange County Science Teacher of the Year, she was recognized as the 2015 Earth Month Hero by the Wyland Foundation. She recently completed the American Cetacean Society Naturalist training program. Nona says, “Seeing the look on a child’s face when they see a whale for the first time never gets old!”</p>
                    {/* </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
        </Container>
    )
}

export default ScienceAdvisor