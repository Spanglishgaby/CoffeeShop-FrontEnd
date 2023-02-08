import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import Mainpage from './Mainpage';
function App() {
  fetch("http://localhost:9292/drinks")
  .then(r => r.json())
  .then(bubbleTeas => {
  console.log(bubbleTeas)
  })


  return (
  <Switch>
    <Route exact path = '/'>
    <LandingPage/>
    </Route>
    <Route exact path = '/mainpage'>
    <Mainpage/>
    </Route>
  </Switch>
  );
}

export default App;
