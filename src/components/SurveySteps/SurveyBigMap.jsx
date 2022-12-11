import SurveyMap from "./SurveyMap";
import "./SurveyBigMap.scss";
import Location from "../UI/Location/Location";

function SurveyBigMap(){
    return(
        <div>
            <a href="/ChooseUnity" className="container__top-left">
                Inapoi la cautare
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