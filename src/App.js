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
import { Container, Image } from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <HashRouter>
        <header style={{marginTop:10}}>
          <Container style={{height:40}} />
          <Image src='/img/logo.png' size='medium' centered />
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
        <footer>Copyright &copy; {new Date().getFullYear()} The Gulf of Catalina Gray Whale Preservation &amp; Education Foundation | All Rights Reserved</footer>
      </HashRouter>
    </Container>
  );
}

export default App;
