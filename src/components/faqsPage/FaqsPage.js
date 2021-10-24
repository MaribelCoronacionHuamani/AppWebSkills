import React from 'react';
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg';
import { QuestionAccordion } from './QuestionAccordion';

/*Aún falta agregarle funcionalidades con js y modificar algo de estilos*/ 
export const FaqsPage = () => {

    const modifyColor = () => {
        let $btnsSelect = document.querySelectorAll(".btn-select");
        /*let $collapseItem, $collapseItem2;
        let $collapseItems = document.querySelectorAll(".collapse-questions-item");*/

        //let $collapseSection = document.FaqsPage.querySelectorAll(".collapse");

        //console.log($collapseSection);
        //Quiero obtener el nombre del ID al que está relacionado el BOTÓN mediante href
        //Luego modificar el .show de cada uno de esos IDs obtenidos, esto solucionará los collapse

        //Al parecer la clave está en el collapsing
        //Agregar accordion-flush de ser necesario, para quitar los bordes

        //Todas las áreas tienen collapse, el show lo tienen las que ya están activas
        //Las áreas cuando están ya a activadas tienen la clase collapse y la clase show y el botón no tiene ninguna clase extra
        //Al desactivar el botón, este se agrega a sí mismo la clase collapsed y al área afectada le agrega collapsing quitándole collapse
        //Luego el botón mantiene la clase collapsed, pero el área que fue afectada se quita el collapsing y se pone el collapse
        //El collapsing parece ser solo transitorio
        //El collapsed se mantiene, aún cuando se interactúa con otros botones

        /*La posible solución sería escuchando el último click sobre el elemento*/ 

        for (let i = 0; i < $btnsSelect.length; i++){
            if ($btnsSelect[i].getAttribute("aria-expanded") === "true") {
                //console.log("Cuando se activan:");
    
                $btnsSelect[i].classList.add("btn-select-color");

                /*
                $collapseItem = document.getElementById($btnsSelect[i].getAttribute("href"));

                console.log($btnsSelect[i]);
                console.log($collapseItem);
                $collapseItem.classList.add("show");

                
                for (let j = 0; j < $btnsSelect.length; j++){
                    if (j !== i && $btnsSelect[j].getAttribute("aria-expanded") === "true") {

                        $btnsSelect[j].setAttribute("aria-expanded", "false");
                        $btnsSelect[j].classList.add("collapsed");

                        $collapseItems[j].classList.remove(["collapse", "show"]);
                        $collapseItems[j].classList.add("collapsing");

                        $collapseItems[j].classList.remove("collapsing");
                        $collapseItems[j].classList.add("collapse");

                    }
                }*/
                
              
            }

            if ($btnsSelect[i].getAttribute("aria-expanded") === "false") {
                $btnsSelect[i].classList.remove("btn-select-color");

                /*console.log("Cuando se desactivan");

                $collapseItem = document.getElementById($btnsSelect[i].getAttribute("href"));

                console.log($btnsSelect[i]);
                console.log($collapseItem);*/
                

                
            }
        }
    }

    React.useEffect(() => {
        window.addEventListener("click", modifyColor);

        return () => {
            window.removeEventListener("click", modifyColor);
        }
    },[]);


    return (
        <div>
            <ContentModelBanner title="Preguntas frecuentes" subtitle="Te ayudamos a resolver tus dudas" p="En caso no encuentre su pregunta puede contactase con nosotros mediante nuestras redes sociales" img={img} />

            <h3>Accordion expandido solucionado</h3>
            <h3>Falta solucionar: Cuando una de las secciones se expande, otro se debe acortar
                La posible solución es el .show raaa
            </h3>

            <div className="w-100" style={{minHeight:"85vh"}}>
                <div className="container" style={{marginTop:"3rem", paddingBottom:"0.3rem"}}>
                    <div className="row gx-5">
                        <div className="col-sm-4">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link btn-select btn-select-color" href="collapseExample1" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="true" aria-controls="collapseExample1">Tema de Pregunta 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select" href="collapseExample2" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Tema de Pregunta 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select" href="collapseExample3" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">Tema de Pregunta 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select" href="collapseExample4" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">Tema de Pregunta 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-8">
                            <div className="collapse show collapse-questions-item" id="collapseExample1">
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question1"
                                        idAnswer="answer1"
                                        idParent="collapseExample1"
                                        />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question2"
                                        idAnswer="answer2"
                                        idParent="collapseExample1"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question3"
                                        idAnswer="answer3"
                                        idParent="collapseExample1"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question4"
                                        idAnswer="answer4"
                                        idParent="collapseExample1"
                                    />
                            
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample2">
                            
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question5"
                                        idAnswer="answer5"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question6"
                                        idAnswer="answer6"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question7"
                                        idAnswer="answer7"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question8"
                                        idAnswer="answer8"
                                        idParent="collapseExample2"
                                    />
                            
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample3">
                            
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question9"
                                        idAnswer="answer9"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question10"
                                        idAnswer="answer10"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question11"
                                        idAnswer="answer11"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question12"
                                        idAnswer="answer12"
                                        idParent="collapseExample3"
                                    />
                                
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample4">
                                
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question1"
                                        idAnswer="answer1"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question2"
                                        idAnswer="answer2"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question3"
                                        idAnswer="answer3"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola?"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question4"
                                        idAnswer="answer4"
                                        idParent="collapseExample4"
                                    />
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
        
    )
}

/*setInterval(() => {
    console.log(document.querySelector(".btn-select").getAttribute("aria-expanded"));
},1000)*/

//console.log($btnsSelect.getAtributtes());







/*
setInterval(() => {
    modifyColor();
    console.log("Hola");
}, 1000);

*/

