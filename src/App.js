import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const App=()=>{
    return (
        <BrowserRouter>
            <div>{document.title}</div>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/signin'><SignIn /></Route>
                <Route path='/signup'><SignUp /></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;