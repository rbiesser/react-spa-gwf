import React from 'react'
import './App.css'

/* Pages */
import AboutUs from './Pages/AboutUs'
import BoardMembers from './Pages/BoardMembers'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'
import Home from './Pages/Home'
import ScienceAdvisor from './Pages/ScienceAdvisor'
import TheGrayWhale from './Pages/TheGrayWhale'
import TripSummaries from './Pages/TripSummaries'

/* Components */
import NavMenu from './Components/NavMenu'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <HashRouter>
        <header>
          <NavMenu />
        </header>
        <main>
          <Switch>
            <Route path='/about-us' component={AboutUs} />
            <Route path='/board-members' component={BoardMembers} />
            <Route path='/science-advisor' component={ScienceAdvisor} />
            <Route path='/contact' component={Contact} />
            <Route path='/donate' component={Donate} />
            <Route path='/the-gray-whale' component={TheGrayWhale} />
            <Route path='/trip-summaries' component={TripSummaries} />
            <Route path='/' component={Home} />
          </Switch>
        </main>
        <footer>This is the footer</footer>
      </HashRouter>
    </Container>
  );
}

export default App;
