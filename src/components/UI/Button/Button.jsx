import "./Button.scss";

function Button(props) {
    return (
        <div>
            <a className={"button"} href={"#"}>{ props.title }</a>
        </div>
    );
}

export default Button;