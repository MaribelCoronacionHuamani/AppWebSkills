import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { HomePage } from '../components/homePage/HomePage';
import { NotFound } from '../components/ui/NotFound';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )  
}
