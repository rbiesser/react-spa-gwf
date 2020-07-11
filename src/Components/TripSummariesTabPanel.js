import React from 'react'
import { Tab } from 'semantic-ui-react'
import tripSummaries from '../Data/TripSummaries'
import TripSummary from '../Components/TripSummary'

const panes = []

// TODO: pull summaries from a database with pagination and allow for adding new reports

// sort descending
tripSummaries.sort((a, b) => (a.index < b.index) ? 1 : -1)

// each pane is an object of a title for the tab and the component to render
tripSummaries.map((tripSummary, index) => (
    panes.push({menuItem: `Trip Report: ${tripSummary.date}`, render: () => <TripSummary event={tripSummary} />})
))

const TripSummariesTabPanel = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TripSummariesTabPanel