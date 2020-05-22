import React from 'react'
import { Container, Form, Button, Header, Grid, Image } from 'semantic-ui-react'

function Contact() {
    return(
        <Container>
            <Header as='h1' content='Get In Touch With Us' />
            <p>We want to hear from you! Submit your comments & questions below.</p>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>

            <Header as='h2' content='Contact The Gulf of Catalina Gray Whale Preservation & Education Foundation' />
            <Form action='' >
                <Form.Field control='input' label='Name' />
                <Form.Field control='input' label='Email' />
                <Form.Field control='textarea' label='Message' />
                <Button primary type='submit'>Send Message</Button>
            </Form>
                    </Grid.Column>
                    <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Contact