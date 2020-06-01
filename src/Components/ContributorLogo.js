import React from 'react'
import { Image } from 'semantic-ui-react'

export default function ContributorLogo(props) {
    return (
        <a href={props.contributor.url} target='_blank' rel="noopener noreferrer">
            <Image src={'/img/contributors/' + props.contributor.logo} />
        </a>
    )
}