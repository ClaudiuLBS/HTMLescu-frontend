import { BrowserRouter, Routes, Route } from "react-router-dom";

import SurveyLayout from "./SurveySteps/SurveyLayout";

import SurveyUnity from "./SurveySteps/SurveyUnity";
import SurveryVisitScope from "./SurveySteps/SurveyVisitScope";

function SurveryNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Route wrapper in care o sa avem layout-ul cu:
                -> HeaderNavgiation
                -> Titlu, etc */}
                <Route path="/" element={<SurveyLayout/>}>
                    
                    {/* Fiecare pas din chestionar */}
                    <Route index element={<SurveryVisitScope/>}></Route>
                    <Route path="/ChooseUnity" element={<SurveyUnity/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SurveryNavigation;