import {
  Switch,
  Route,
} from 'react-router-dom';

import Search from './pages/search';
import Favorites from './pages/favorites';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/favoritos" component={Favorites} />
    </Switch>
  )
}
