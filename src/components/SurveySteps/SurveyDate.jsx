import "./SurveyLayout.scss";
import "./SurveyDate.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";
import SearchBranch from "../UI/SearchBranch/SearchBranch";

// React Calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

function SurveyDate(){
    const [selectedDate, setSelectedDate] = useState(new Date());

    return(
        <div className="survey_wrapper">
            <MainTitle title="User date"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <input type="text" placeholder="ceva..." value={selectedDate}/>
        </div>
    )
}

export default SurveyDate;