import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { BeneficiosAlPage } from '../components/beneficiosAlPage/BeneficiosAlPage';
import { ContactPage } from '../components/contactPage/ContactPage';
import { HomePage } from '../components/homePage/HomePage';
import { MisionPage } from '../components/misionPage/MisionPage';
import { Navbar } from '../components/ui/Navbar';
import { FaqsPage } from '../components/faqsPage/FaqsPage';
import { Novedades } from '../components/novedades/Novedades';
import { Proyectos } from '../components/proyectos/Proyectos';
import { NotFound } from '../components/ui/NotFound';
import { BeneficiosCsPage } from '../components/beneficiosCsPage/BeneficiosCsPage';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <div className="min-vh-100">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contacto" component={ContactPage} />
                    <Route exact path="/alianzas-beneficios" component={BeneficiosAlPage} />
                    <Route exact path="/preguntas-frecuentes" component={FaqsPage} />
                    <Route exact path="/mision-vision-valores" component={MisionPage} />
                    <Route exact path="/beneficios-IEEE" component={BeneficiosCsPage}/>
                    <Route exact path="/novedad" component={Novedades} />
                    <Route exact path="/proyecto" component={Proyectos} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )  
}
