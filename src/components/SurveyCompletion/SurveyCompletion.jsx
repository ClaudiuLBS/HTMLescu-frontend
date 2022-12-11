import "./SurveyCompletion.scss";

import HeaderNavigation from "../UI/HeaderNavigation";

import VerificationIcon from "../../assets/images/verified-badge.png";
// import DeleteIcon from "../../assets/images/trash.png";

function SurveyCompletion(props){
    return(
        <div className="survey-completion__wrapper">
            <HeaderNavigation/>
            <div className="survey-completion__message">
                <img src={VerificationIcon} alt="verification_icon" />
                <h1>Vizita in uniunea BCR a fost programata cu succes!</h1>
                <p>Urmeaza sa primesti pe adresa de email toate informatiile despre programarea ta.</p>
            </div>
            <a class="survey_back" href="https://www.bcr.ro/ro/persoane-fizice" target="_blank">Inapoi la bcr.ro</a>
        </div>
    )
}

export default SurveyCompletion;