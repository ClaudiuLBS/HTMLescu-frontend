import "./DropDown.scss"
function Drop_down() {
    return (
        <div className={"container"}>
            <select name="" id="">
                <option value="none" selected disabled hidden>Alege scopul vizitei</option>
                <option value="">Depunere sau retragere de bani</option>
                <option value="">Plata rata credit</option>
                <option value="">Operatiune fara numerar</option>
            </select>
        </div>
    );
}

export default Drop_down;