import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { BeneficiosAlPage } from '../components/beneficiosAlPage/BeneficiosAlPage';
import { beneficiosCsPage } from '../components/beneficiosCsPage/beneficiosCsPage';
import { ContactPage } from '../components/contactPage/ContactPage';
import { HomePage } from '../components/homePage/HomePage';
import { misionPage } from '../components/misionPage/misionPage';
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
                    <Route exact path="/alianzas-beneficios" component={BeneficiosAlPage} />
                    <Route exact path="/mision-vision-valores" component={misionPage} />
                    <Route exact path="/beneficios-IEEE" component={beneficiosCsPage}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )  
}
