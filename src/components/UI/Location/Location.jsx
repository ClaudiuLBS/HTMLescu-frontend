import "./Location.scss"
function Location(props) {
    return (
        <div className="location__container">
            <div className="mainBlock">
                <div className="twoElementsInline">
                    <div className="child">
                        <h2 className="name">{ props.title }</h2>
                    </div>
                    <div className="child">
                        <p className="distance">{ props.distance }</p>
                    </div>
                </div>
                <p className="addressAndServices">{ props.location }</p>
                <p className="disponibility">{ props.disponibility }</p>
                <p className="addressAndServices">{ props.services }</p>
            </div>
        </div>
    );
}

export default Location;