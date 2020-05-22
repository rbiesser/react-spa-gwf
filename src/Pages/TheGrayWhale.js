import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import TheGrayWhaleAccordion from '../Components/TheGrayWhaleAccordion'

function TheGrayWhale() {
    return(
        <Container>
            <Header as='h1' color='blue' content='The Gray Whale' />
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' floated='right' />
            <p>The gray whale, (Eschrichtius robustus), is a baleen whale that migrates between feeding and breeding grounds yearly. It reaches a length of about 15.2 m (50 ft), a weight of 36 tonnes (35 long tons; 40 short tons), and lives 50-70 years. The common name of the whale comes from the gray patches and white mottling on its dark skin.</p>
            <p>Gray whales were once called devil fish because of their fighting behavior when hunted. The gray whale is the sole living species in the genus Eschrichtius, which in turn is the sole living genus in the family Eschrichtiidae.</p>
            <p>This mammal descended from filter-feeding whales that developed at the beginning of the Oligocene, over 30 million years ago. The gray whale is distributed in an eastern North Pacific (North American) population and a critically endangered western North Pacific (Asian) population. North Atlantic populations were extirpated (perhaps by whaling) on the European coast before 500 AD and on the American coast around the late 17th to early 18th centuries. However, on May 8, 2010, a sighting of a gray whale was confirmed off the coast of Israel in the Mediterranean Sea, leading some scientists to think they might be repopulating old breeding grounds that have not been used for centuries.</p>
            <TheGrayWhaleAccordion />
        </Container>
    )
}

export default TheGrayWhale