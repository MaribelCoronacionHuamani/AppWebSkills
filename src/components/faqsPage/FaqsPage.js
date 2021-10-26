import React from 'react';
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg';
import { QuestionAccordion } from './QuestionAccordion';

/*Aún falta agregarle algo de estilos, quizá una sola funcionalidad: Que siempre haya un set de preguntas abierto*/ 
export const FaqsPage = () => {

    const modifyColor = () => {
        let $btnsSelect = document.querySelectorAll(".btn-select");
        
        for (let i = 0; i < $btnsSelect.length; i++){
            if ($btnsSelect[i].getAttribute("aria-expanded") === "true") { 
                $btnsSelect[i].classList.add("btn-select-color");
              
            }
            if ($btnsSelect[i].getAttribute("aria-expanded") === "false") {
                $btnsSelect[i].classList.remove("btn-select-color");
                
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

            <div className="w-100" style={{minHeight:"85vh"}}>
                <div className="container" style={{marginTop:"3rem", paddingBottom:"0.3rem"}}>
                    <div className="row gx-5">
                        <div className="col-sm-4">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link btn-select btn-select-color" href="collapseExample1" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="true" aria-controls="collapseExample1">Tema de Pregunta 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select"href="collapseExample2" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Tema de Pregunta 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select" href="collapseExample3" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">Tema de Pregunta 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-select" href="collapseExample4" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">Tema de Pregunta 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-8" id="raaa">
                            <div className="collapse show collapse-questions-item" id="collapseExample1" data-bs-parent="#raaa">
                                    <QuestionAccordion
                                        question="¿Hola Bola? T1"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question1"
                                        idAnswer="answer1"
                                        idParent="collapseExample1"
                                        />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T1"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question2"
                                        idAnswer="answer2"
                                        idParent="collapseExample1"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T1"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question3"
                                        idAnswer="answer3"
                                        idParent="collapseExample1"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T1"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question4"
                                        idAnswer="answer4"
                                        idParent="collapseExample1"
                                    />
                            
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample2" data-bs-parent="#raaa">
                            
                                    <QuestionAccordion
                                        question="¿Hola Bola? T2"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question5"
                                        idAnswer="answer5"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T2"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question6"
                                        idAnswer="answer6"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T2"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question7"
                                        idAnswer="answer7"
                                        idParent="collapseExample2"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T2"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question8"
                                        idAnswer="answer8"
                                        idParent="collapseExample2"
                                    />
                            
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample3" data-bs-parent="#raaa">
                            
                                    <QuestionAccordion
                                        question="¿Hola Bola? T3"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question9"
                                        idAnswer="answer9"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T3"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question10"
                                        idAnswer="answer10"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T3"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question11"
                                        idAnswer="answer11"
                                        idParent="collapseExample3"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T3"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question12"
                                        idAnswer="answer12"
                                        idParent="collapseExample3"
                                    />
                                
                            </div>
                            <div className="collapse collapse-questions-item" id="collapseExample4" data-bs-parent="#raaa">
                                
                                    <QuestionAccordion
                                        question="¿Hola Bola? T4"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question1"
                                        idAnswer="answer1"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T4"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question2"
                                        idAnswer="answer2"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T4"
                                        answer="lorem lorem lorem gaa el que no salta se kcha al kbro" idQuestion="question3"
                                        idAnswer="answer3"
                                        idParent="collapseExample4"
                                    />
                                    <QuestionAccordion
                                        question="¿Hola Bola? T4"
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

