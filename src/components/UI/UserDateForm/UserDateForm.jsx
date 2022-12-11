import "./UserDateForm.scss";

function UserDateForm(props) {
    return (
            <div>
                <div className="formInputBox">
                    <div className="formInputBlock">
                        <div className="formInputLabel">
                            <label htmlFor="firstname">Nume*</label>
                            <input type="text" className="firstname" name="firstname"></input>
                            {/* Trebuie adaugata clasa `error__message_visible` */}
                            <span className="error__message">Acest camp este obligatoriu!</span>
                        </div>
                        <div className="formInputLabel">
                            <label htmlFor="lastname">Prenume*</label>
                            <input type="text" className="lastname" name="lastname"></input>
                            {/* Trebuie adaugata clasa `error__message_visible` */}
                            <span className="error__message">Acest camp este obligatoriu!</span>
                        </div>
                    </div>
                    <div className="formInputLabel" id="lastFormInputLabel">
                        <label htmlFor="email">Adresa de e-mail*</label>
                        <input type="email" className="email" name="email"></input>
                        {/* Trebuie adaugata clasa `error__message_visible` */}
                        <span className="error__message">Acest camp este obligatoriu!</span>
                    </div>
                </div>
            </div>
    );
}

export default UserDateForm;