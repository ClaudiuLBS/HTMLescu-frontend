import "./Location.scss"
function Location() {
    return (
        <div className="container">
            <div className="mainBlock">
                <div className="twoElementsInline">
                    <div className="child">
                        <h2 className="name">BCR Sector 2</h2>
                    </div>
                    <div className="child">
                        <p className="distance">780 m</p>
                    </div>
                </div>
                <p className="addressAndServices">Str. Ziduri Mosi, Nr. 23, Bucuresti, Sector 2 • Veranda Mall, etaj 1</p>
                <p className="disponibility">Disponibil de la 15:30, astazi</p>
                <p className="addressAndServices">Self-service 24/7 • Fara casiere</p>
            </div>
        </div>
    );
}

export default Location;