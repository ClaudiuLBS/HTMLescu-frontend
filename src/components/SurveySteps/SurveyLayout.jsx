import "./SurveyLayout.scss";

import HeaderNavigation from "../UI/HeaderNavigation"

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function SurveryLayout(){
    return (
        <div>
            <HeaderNavigation/>

            <h1>PAS 1 - Alege scopul vizitei</h1>

            <div className="survey_navigation">
                <div className="survey_step survey_step__active">
                    <Link to="/"></Link>
                </div>
                <div className="survey_step">
                    <Link to="/"></Link>
                </div>
                <div className="survey_step">
                    <Link to="/ChooseUnity"></Link>
                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default SurveryLayout;