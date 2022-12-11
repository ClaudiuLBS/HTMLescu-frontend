import { BrowserRouter, Routes, Route } from "react-router-dom";

import SurveyLayout from "./SurveySteps/SurveyLayout";

import SurveryVisitScope from "./SurveySteps/SurveyVisitScope";
import SurveyUnity from "./SurveySteps/SurveyUnity";
import SurveyDate from "./SurveySteps/SurveyDate";
import SurveyUser from "./SurveySteps/SurveyUser";
import SurveyBigMap from "./SurveySteps/SurveyBigMap";

function SurveryNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Fiecare pas din chestionar */}
                <Route index element={<SurveryVisitScope/>}></Route>
                <Route path="/ChooseUnity" element={<SurveyUnity/>}></Route>
                <Route path="/ChooseDate" element={<SurveyDate/>}></Route>
                <Route path="/UserData" element={<SurveyUser/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SurveryNavigation;