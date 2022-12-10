import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import Drop_down from "../UI/Drop_down";

function SurveyVisitScope(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="Despre ce vrei sa vorbim?"></MainTitle>
            <MainDescription desc="Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate."></MainDescription>
            <Drop_down></Drop_down>
        </div>
    )
}

export default SurveyVisitScope;