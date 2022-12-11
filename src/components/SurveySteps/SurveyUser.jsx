import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

// User date form 
import UserDateForm from "../UI/UserDateForm/UserDateForm";
import Button from "../UI/Button/Button";
import SurveryLayout from "./SurveyLayout";

function SurveyUser(){
    return(
        <SurveryLayout currentPage={3}>
            <div className="survey_wrapper">
                <MainTitle title="Introdu ceva"></MainTitle>
                <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
                <UserDateForm></UserDateForm>
            </div>
        </SurveryLayout>
    )
}

export default SurveyUser;