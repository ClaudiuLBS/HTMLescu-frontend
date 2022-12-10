import "./SurveyLayout.scss";
import "./SurveyVisitScope.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import DropDown from "../UI/DropDown";
import Buton from "../UI/Button/Button";

function SurveyVisitScope(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="Despre ce vrei sa vorbim?"></MainTitle>
            <MainDescription desc="Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate."></MainDescription>
            <div className="survey_unity__scope">
                <DropDown></DropDown>
                <Buton title="Continua"></Buton>
            </div>
        </div>
    )
}

export default SurveyVisitScope;