import { useDispatch } from "react-redux";
import { setAppointment } from "../../redux/appointmentSlice";
import "./DropDown.scss"


function DropDown() {
    const dispatch = useDispatch()
    const setOperation = (operation) => {
        dispatch(setAppointment({operation}))
    }
    return (
        <div className={"container"}>
            <select name="" id="" onChange={(item) => setOperation(item.target.value)}>
                <option value="none" selected disabled hidden>Alege scopul vizitei*</option>
                <option value="Plata rata credit">Plata rata credit</option>
                <option value="Credit de nevoi personale">Credit de nevoi personale</option>
                <option value="Credit ipotecare">Credit ipotecare</option>
                <option value="Investitii subscriere/rascumparare">Investitii subscriere/rascumparare</option>
                <option value="Pensie privata">Pensie privata</option>
                <option value="Altceva">Altceva</option>
            </select>
        </div>
    );
}

export default DropDown;