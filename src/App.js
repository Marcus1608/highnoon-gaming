import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Events from './Components/Events';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* <img className="top-bg__image" src="imgs/gaming1.jpg" alt="" />{' '} */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/highnoon-gaming" exact component={Landing} />
          <Route path="/events" component={Events} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
