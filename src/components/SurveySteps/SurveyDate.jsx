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
import DateAndTime from "../UI/DateAndTime/DateAndTime";

function SurveyDate(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [overlayState, setOverlayState] = useState(false);

    const minDate = new Date()
    let maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 13)
    return(
        <SurveryLayout currentPage={2}>
            <div className="survey_wrapper">
                <div className={ overlayState ? "react-calendar__overlay" : "react-calendar__overlay overlay__hidden"}
                    onClick={() => { setOverlayState(!overlayState) }}>
                </div>

                <Calendar 
                    className= { overlayState ? "my-calendar" : "my-calendar overlay__hidden"}
                    onChange={setSelectedDate} 
                    onClickDay={() => { setOverlayState(!overlayState) }}
                    value={selectedDate}
                    minDate={minDate}
                    maxDate={maxDate}
                />

                <MainTitle title="User date" />
                <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate." />
                
                <div className="survey_date">
                    <input type="text" value={selectedDate.toLocaleDateString()} onClick={() => { setOverlayState(!overlayState) }}/>
                    <DateAndTime datetime={new Date(selectedDate)}/>
                    <Button href="/UserData" title="Continua"></Button>
                </div>

                {/* Trebuie adaugata clasa `error__message_visible` */}
                <span className="error__message">Acest camp este obligatoriu!</span>
            </div>
        </SurveryLayout>
    )
}

export default SurveyDate;