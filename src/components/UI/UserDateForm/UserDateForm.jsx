import "./UserDateForm.scss";

function UserDateForm(props) {
    return (
            <div>
                <div className="formInputBox">
                    <div className="formInputBlock">
                        <div className="formInputLabel">
                            <label htmlFor="firstname">Nume</label>
                            <input type="text" className="firstname" name="firstname"></input>
                        </div>
                        <div className="formInputLabel">
                            <label htmlFor="lastname">Prenume</label>
                            <input type="text" className="lastname" name="lastname"></input>
                        </div>
                    </div>
                    <div className="formInputLabel" id="lastFormInputLabel">
                        <label htmlFor="email">Adresa de e-mail</label>
                        <input type="email" className="email" name="email"></input>
                    </div>
                </div>
            </div>
    );
}

export default UserDateForm;