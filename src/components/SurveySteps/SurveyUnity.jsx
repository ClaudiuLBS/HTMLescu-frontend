import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

import SearchBranch from "../UI/SearchBranch/SearchBranch"

function SurveyUnity(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <SearchBranch></SearchBranch>
        </div>
    )
}

export default SurveyUnity;