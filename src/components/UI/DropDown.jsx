import "./DropDown.scss"
function Drop_down() {
    return (
        <div className={"container"}>
            <select name="" id="">
                <option value="none" selected disabled hidden>Alege scopul vizitei*</option>
                <option value="">Plata rata credit</option>
                <option value="">Credit de nevoi personale</option>
                <option value="">Credit ipotecare</option>
                <option value="">Investitii subscriere/rascumparare</option>
                <option value="">Pensie privata</option>
            </select>
        </div>
    );
}

export default Drop_down;