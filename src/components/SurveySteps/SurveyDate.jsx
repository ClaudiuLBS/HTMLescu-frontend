import "./SurveyLayout.scss";
import "./SurveyVisitScope.scss"

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import Button from "../UI/Button/Button";

// React Calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SurveyDate.scss";

import { useState } from "react";
import SurveryLayout from "./SurveyLayout";

function SurveyDate(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [overlayState, setOverlayState] = useState(false);

    return(
        <SurveryLayout currentPage={2}>
            <div className="survey_wrapper">
                <div className={ overlayState ? "react-calendar__overlay" : "react-calendar__overlay overlay__hidden"}
                    onClick={() => { setOverlayState(!overlayState) }}>
                </div>

                <Calendar className= { overlayState ? "my-calendar" : "my-calendar overlay__hidden"}
                        onChange={setSelectedDate} 
                        onClickDay={() => { setOverlayState(!overlayState) }}
                        value={selectedDate}
                        ></Calendar>

                <MainTitle title="User date"></MainTitle>
                <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
                
                <div className="survey_unity__scope">
                    <input type="text" placeholder="ceva..." value={selectedDate.toLocaleDateString()} onClick={() => { setOverlayState(!overlayState) }}/>
                    <Button title="Continua"></Button>
                </div>

                {/* Trebuie adaugata clasa `error__message_visible` */}
                <span className="error__message">Acest camp este obligatoriu!</span>
            </div>
        </SurveryLayout>
    )
}

export default SurveyDate;