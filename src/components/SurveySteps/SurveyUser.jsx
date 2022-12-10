import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

// User date form 
import UserDateForm from "../UI/UserDateForm/UserDateForm";
import Button from "../UI/Button/Button";

function SurveyUser(){
    return(
        <div className="survey_wrapper">
            <MainTitle title="Introdu ceva"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <UserDateForm></UserDateForm>
            <Button title="Finalizeaza programarea"></Button>
        </div>
    )
}

export default SurveyUser;