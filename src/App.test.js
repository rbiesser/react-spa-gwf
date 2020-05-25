import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
test('renders app', () => {
  const { getByText } = render(<App />);
});

import AboutUs from './Pages/AboutUs'
test('renders /about-us', () => {
  const { getByText } = render(<AboutUs />);
});

import BoardMembers from './Pages/BoardMembers'
test('renders /board-members', () => {
  const { getByText } = render(<BoardMembers />);
});

import Contact from './Pages/Contact'
test('renders /contact', () => {
  const { getByText } = render(<Contact />);
});

import Donate from './Pages/Donate'
test('renders /donate', () => {
  const { getByText } = render(<Donate />);
});

import Home from './Pages/Home'
import { MemoryRouter } from 'react-router-dom'
test('renders /home', () => {
  const { getByText } = render(<MemoryRouter><Home /></MemoryRouter>);
});

import ScienceAdvisor from './Pages/ScienceAdvisor'
test('renders /science-advisor', () => {
  const { getByText } = render(<ScienceAdvisor />);
});

import TheGrayWhale from './Pages/TheGrayWhale'
test('renders /the-gray-whale', () => {
  const { getByText } = render(<TheGrayWhale />);
});

import TripSummaries from './Pages/TripSummaries'
test('renders /trip-summaries', () => {
  const { getByText } = render(<TripSummaries />);
});
