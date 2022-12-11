import "./MainDescription.scss"
function MainDescription(props) {
    return (
        <div className="Text-center">
            <p>{ props.desc }</p>
        </div>
    );
}

export default MainDescription;