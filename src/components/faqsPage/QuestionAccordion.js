import React from 'react';

export const QuestionAccordion = ({ question, answer, idQuestion, idAnswer, idParent }) => {

    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id={idQuestion}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#"+idAnswer} aria-expanded="false" aria-controls={idAnswer}>
                        {question}
                    </button>
                </h2>
                <div id={idAnswer} className="accordion-collapse collapse show" aria-labelledby={idQuestion} data-bs-parent={"#"+idParent}>
                    <div class="accordion-body">
                        {answer}
                    </div>
                </div>
            </div>    
        </div>
        
    )
    
}
