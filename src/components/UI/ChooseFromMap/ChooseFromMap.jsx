import "./ChooseFromMap.scss";
import { FaLocationArrow } from 'react-icons/fa'

function ChooseFromMap(props) {
    return (
        <div className="container">
            <div className="ChooseBox">
                <div className="ChooseParent">
                    <div className="ChooseChild">
                        <p>Alege de pe hartă</p>
                    </div>
                    <div className="ChooseChild">
                            <FaLocationArrow className="locatorIcon"></FaLocationArrow>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseFromMap;