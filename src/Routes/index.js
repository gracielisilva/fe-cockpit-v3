import { Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Route from './Route';

export default function Routes(){
    return(
        <Switch>
        <Route exact path="/" componet={SignIn} />
        <Route exact path="/register" componet={SignUp}/>
        <Route exact path="/dashboard" componet={Dashboard} isPrivate />
        
        </Switch>
    )
}