import React from 'react';
import home from './components/Home';
import navBar from './components/navBar';
import contactPage from './components/contactPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App(props) {
    return (
        <div>
            <Router>
                <navBar />
                <Switch>
                    <Route path="/" render={()=>(<home tasks={props.tasks} />)} />
                    <Route path="/contact" component={contactPage} />
                </Switch>

            </Router>
            
        </div>
    )
}

//Add Router, Switch, Route here for page changes