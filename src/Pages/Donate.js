import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

function Donate() {
    return(
        <Container>
        <Header as='h1' color='blue' content='Make a Donation' />
        <h3>You have the power to help us make a difference!</h3>
        <p>The Gulf of Catalina Gray Whale Preservation &amp; Education Foundation (GWF) is reaching out to you for your help in not only protecting and preserving this special species, but we are also asking for your assistance in helping us to educate children on the importance of this species.</p>
        <p>There are many costs involved in a program such as this, and we are asking for your assistance in helping us achieve our goals so that we may open a new world of education and adventure to children from all walks of life.</p>
        <p><strong>If you would like to send a donation by mail:</strong></p>
        <ul>
        <li>Please make check payable to The Gulf of Catalina Gray Whale Preservation &amp; Education Foundation</li>
        <li>Mail to 2311 Calle La Serna, San Clemente, CA 92672</li>
        </ul>
        <p><strong>We appreciate your support, thank you!</strong></p>
        <p style={{fontSize:'.7em', fontStyle:'italic'}}>The Gulf of Catalina Gray Whale Preservation &amp; Education Foundation is a&nbsp;<b>501(c)(3) non-profit corporation</b>, a publicly supported organization.&nbsp;<b>DLN:</b>&nbsp;17053-219-33303-8 |&nbsp;<b>Employer ID:</b>&nbsp;01-0905972</p>
    </Container>
    )
}

export default Donate