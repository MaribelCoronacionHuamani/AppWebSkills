import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ContactPage } from '../components/contactPage/ContactPage';
import { HomePage } from '../components/homePage/HomePage';
import { Navbar } from '../components/ui/Navbar';
import { NotFound } from '../components/ui/NotFound';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <div className="min-vh-100">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contacto" component={ContactPage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )  
}
