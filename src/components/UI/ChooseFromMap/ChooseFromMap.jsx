import "./ChooseFromMap.scss";
import { FaLocationArrow } from 'react-icons/fa'
import { Link } from "react-router-dom";

function ChooseFromMap(props) {
    return (
        <Link to="/ChooseMap">
            <div className="ccontainer">
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
        </Link>
    );
}

export default ChooseFromMap;