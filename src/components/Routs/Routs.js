import { BrowserRouter, Switch, Route} from 'react-router-dom';
import List from '../List/List';

import Home from '../Home/Home'
import List from '../List/List'

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>                
            <Route path="/List" component={List}/>      
        </Switch>   
    </BrowserRouter>
  )
}
export default Routes