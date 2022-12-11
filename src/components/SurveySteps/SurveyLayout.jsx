import "./SurveyLayout.scss";

import HeaderNavigation from "../UI/HeaderNavigation"

import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function SurveryLayout(){
    // Array that contains each title => each step
    const stepTitles = ["PAS 1 - Alege scopul vizitei", "PAS 2 - Alege unitatea BCR", "PAS 3 - Alege data pentru programare", "PAS 4 - Introdu datele personale"];
    // Use state => updates the current step title
    const [currentStepTitle, setCurrentStepTitle] = useState(localStorage.getItem('currentStepTitle'));

    // Holds number of steps
    const steps = stepTitles.length;
    // Use state => updates current step progress
    const [currentStepActive, setCurrentStepActive] = useState([true, false, false, false]);

    // Keep state after refresh 
    // => currentStepTitle
    useEffect(()=>{
        localStorage.setItem('currentStepTitle', currentStepTitle)
    },[currentStepTitle]);

    function hadndleCurrentStepActive(position){
        // Two for iterations that generate an array:
        // [true, true ... true[position], false[position + 1], false ... false false]
        // in order to keep track of what the user needs to complete
        let arrTrue = [], arrFalse = [];
        for(let i = 0; i <= position; i++){
            arrTrue.push(true);
        }
        for(let i = 0; i < steps - position; i++){
            arrFalse.push(false);
        }
        const arr = arrTrue.concat(arrFalse);
        
        setCurrentStepActive(arr);
    }

    //modifies survey navigation background
    function handleStateCompletion(pos){
        const root = document.documentElement;
        let completion, incompletion;
        
        if(pos === 0){
            completion = 0;
            incompletion = 0;
        } else{
            completion = (pos) * 100 / (steps - 1);
            incompletion = 100 - completion;
            console.log(completion, incompletion);
        }

        root?.style.setProperty("--navWidthComplete", completion + "%");
        root?.style.setProperty("--navWidthIncomplete", incompletion + "%");
    }



    // Array which will hold the routes
    // [0] => first step    : Choose visit reason
    // [1] => second step   : Choose branch
    // ... TO DO
    // const routes = ["/", "ChooseUtility"];

    return (
        <div className="body_wrapper">
            <HeaderNavigation/>

            <div className="page_wrapper">
                <h1>{ currentStepTitle }</h1>

                <div className="survey_navigation">

                    {/* FIRST STEP */}
                    <div className={ currentStepActive[0] ? "survey_step survey_step__active" : "survey_step" }>
                        <Link to="/" 
                            onClick={ () => {
                                setCurrentStepTitle(stepTitles[0])
                                hadndleCurrentStepActive(0);
                                handleStateCompletion(0);
                            }}>.</Link>
                    </div>

                    {/* SECOND STEP : CHOOSE BRANCH */}
                    <div className={currentStepActive[1] ? "survey_step survey_step__active" : "survey_step" }>
                        <Link to="/ChooseUnity"
                            onClick={ () => {
                                setCurrentStepTitle(stepTitles[1]);
                                hadndleCurrentStepActive(1);
                                handleStateCompletion(1);
                            }}>.</Link>
                    </div>

                    {/* THIRD STEP: CHOOSE DATE */}
                    <div className={ currentStepActive[2] ? "survey_step survey_step__active" : "survey_step" }>
                        <Link to="/ChooseDate" 
                            onClick={ () => {
                                setCurrentStepTitle(stepTitles[2])
                                hadndleCurrentStepActive(2);
                                handleStateCompletion(2);
                            }}>.</Link>
                    </div>

                    {/* FOURTH STEP: USER DATA */}
                    <div className={ currentStepActive[3] ? "survey_step survey_step__active" : "survey_step" }>
                        <Link to="/UserData" s
                            onClick={ () => {
                                setCurrentStepTitle(stepTitles[3])
                                hadndleCurrentStepActive(3);
                                handleStateCompletion(3);
                            }}>.</Link>
                    </div>
                </div>

                <Outlet/>
            </div>
        </div>
    )
}

export default SurveryLayout;