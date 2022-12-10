import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import Drop_down from "../UI/Drop_down";

function SurveyUnity(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <Drop_down></Drop_down>
        </div>
    )
}

export default SurveyUnity;