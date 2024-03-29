import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAppointment } from "../../../redux/appointmentSlice";
import "./Location.scss"


function Location({branch}) {
    const dispatch = useDispatch()
    if (!branch) return null;
    
    const today = new Date()

    const selectBranch = () => {
        const branchId = branch.id
        dispatch(setAppointment({ branch: branchId }))
    }

    const getOpeningText = () => {
        const schedule = branch.appointment_schedule
        
        let today_starting_datetime = new Date()
        today_starting_datetime.setHours(schedule.mon_fri_start_hour , schedule.mon_fri_start_min, 0)
        
        let today_closing_datetime = new Date()
        today_closing_datetime.setHours(schedule.mon_fri_end_hour, schedule.mon_fri_end_min)


        let tomorrow_starting_datetime = new Date()
        tomorrow_starting_datetime.setDate(tomorrow_starting_datetime.getDate() + 1)
        tomorrow_starting_datetime.setHours(schedule.mon_fri_start_hour, schedule.mon_fri_start_min, 0)

        let tomorrow_closing_datetime = new Date()
        tomorrow_closing_datetime.setDate(tomorrow_closing_datetime.getDate() + 1)
        tomorrow_closing_datetime.setHours(schedule.mon_fri_end_hour, schedule.mon_fri_end_min, 0)


        if (today.getDay() == 0 || today.getDay() == 6) {
            today_starting_datetime.setHours(schedule.sat_sun_start_hour, schedule.sat_sun_start_min, 0)
            today_closing_datetime.setHours(schedule.sat_sun_end_hour, schedule.sat_sun_end_min, 0)
            if (today.getDay() == 6) {
                tomorrow_starting_datetime.setHours(schedule.sat_sun_start_hour, schedule.sat_sun_start_min, 0)
                tomorrow_closing_datetime.setHours(schedule.sat_sun_start_hour, schedule.sat_sun_start_min, 0)
            }
        }

        if (today < today_starting_datetime)
            return (
                <div style={{ color: '#FFCC00' }}>Se deschide azi la {today_starting_datetime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}</div>
            )
        else if (today < today_closing_datetime)
            return (
                <div style={{ color: '#FFCC00' }}>Se inchide azi la {today_closing_datetime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}</div>
            )
        else 
            return (
                <div style={{ color: 'rgb(214, 40, 40)' }}>Se deschide maine la {tomorrow_starting_datetime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}</div>
            )
    }

    const branchFeature = () => {
        const schedule = branch.appointment_schedule;
        let features = ""
        if(schedule.is_cashless){
            features += "Cashless •";
        }
        if(schedule.is_sunday_open){
            features += "Deschis duminica •";
        }
        if(schedule.is_weekend_open){
            features += "Deschis in weeked •";
        }
        return features.slice(0, -1);
    }

    return (
        <div className="location__container">
            <div className="mainBlock">
                <div className="twoElementsInline">
                    <div className="child">
                        <h2 className="name">{ branch.name }</h2>
                    </div>
                    {/* <div className="child">
                        <p className="distance">{ 100 }</p>
                    </div> */}
                </div>
                <p className="addressAndServices">{ branch.street }</p>
                <p className="disponibility">{ getOpeningText() }</p>
                <div className="location-select__container">
                    <p className="addressAndServices">{ branchFeature() }</p>
                    <Link to="/ChooseDate"><div onClick={selectBranch} className="btn-select">Selecteaza</div></Link>
                </div>
            
            </div>
        </div>
    );
}

export default Location;