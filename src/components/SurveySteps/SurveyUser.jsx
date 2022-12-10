import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

function SurveyUser(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="Introdu ceva"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
        </div>
    )
}

export default SurveyUser;