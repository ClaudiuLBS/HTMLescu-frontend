import { BrowserRouter, Routes, Route } from "react-router-dom";


import SurveryVisitScope from "./SurveySteps/SurveyVisitScope";
import SurveyUnity from "./SurveySteps/SurveyUnity";
import SurveyDate from "./SurveySteps/SurveyDate";
import SurveyUser from "./SurveySteps/SurveyUser";
import SurveyBigMap from "./SurveySteps/SurveyBigMap";
import SurveyCompletion from "./SurveyCompletion/SurveyCompletion";

function SurveryNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Fiecare pas din chestionar */}
                <Route index element={<SurveryVisitScope/>} />
                <Route path="/ChooseUnity" element={<SurveyUnity/>} />
                <Route path="/ChooseDate" element={<SurveyDate/>} />
                <Route path="/UserData" element={<SurveyUser/>} />
                <Route path="/ChooseMap" element={<SurveyBigMap/>} />
                <Route path="/Final" element={<SurveyCompletion/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default SurveryNavigation;