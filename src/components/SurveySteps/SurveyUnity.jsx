import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

import SearchBranch from "../UI/SearchBranch/SearchBranch"
import ChooseFromMap from "../UI/ChooseFromMap/ChooseFromMap"

function SurveyUnity(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <SearchBranch></SearchBranch>
            <ChooseFromMap></ChooseFromMap>
        </div>
    )
}

export default SurveyUnity;