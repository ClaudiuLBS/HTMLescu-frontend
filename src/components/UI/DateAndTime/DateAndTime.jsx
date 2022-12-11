import "./DateAndTime.scss"
function DateAndTime() {
    return (
        <div className={"containerDateAndTime"}>
            <p className="miniTitle">Alege ora</p>
            <div className="DateAndTimeBox">
                <p className="Data">Marti, 17 dec. 2022</p>
                <div className="OraBox selected">
                    <p className="Ora">11:00 - 11:30</p>
                </div>
                <div className="OraBox">
                    <p className="Ora">11:00 - 11:30</p>
                </div>
                <p className="Data">Marti, 17 dec. 2022</p>
                <div className="OraBox">
                    <p className="Ora">11:00 - 11:30</p>
                </div>
            </div>
        </div>
    );
}

export default DateAndTime;