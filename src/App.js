import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import DeleteAccount from './component/DeleteAccount';
import User from './component/User';

const App=()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/signin'><SignIn /></Route>
                <Route path='/signup'><SignUp /></Route>
                <Route path='/delaccount'><DeleteAccount /></Route>
                <Route path='/user'><User /></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;