import "./SurveyLayout.scss";
import "./SurveyVisitScope.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import Drop_down from "../UI/Drop_down";
import Buton from "../UI/Button/Button";

function SurveyVisitScope(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="Despre ce vrei sa vorbim?"></MainTitle>
            <MainDescription desc="Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate."></MainDescription>
            <div className="survey_unity__scope">
                <Drop_down></Drop_down>
                <Buton title="Continua"></Buton>
            </div>
        </div>
    )
}

export default SurveyVisitScope;