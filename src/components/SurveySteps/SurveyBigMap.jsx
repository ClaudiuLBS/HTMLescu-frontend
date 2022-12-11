import SurveyMap from "./SurveyMap";
import "./SurveyBigMap.scss";
import Location from "../UI/Location/Location";
import Arrow from "../../assets/images/arrow.png";

function SurveyBigMap(){
    return(
        <div>
            <a href="/ChooseUnity" className="container__top-left">
                <img src={Arrow} alt="arrow" />
                <div>Inapoi</div>
            </a>
            <SurveyMap></SurveyMap>    
            <div className="container__bottom-left">
                <Location
                    title = "un titlu"
                    distance = "678"
                    location = "o locatie"
                    disponibility = "Yees"
                    services = "Yessir" 
                >
                </Location>
            </div>
        </div>
    )
}

export default SurveyBigMap;