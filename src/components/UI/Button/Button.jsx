import "./Button.scss";

function Button(props) {
    return (
        <div>
            <div className={"button"} >{ props.title }</div>
        </div>
    );
}

export default Button;