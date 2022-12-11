import './Button.scss';

function Button({ title }) {
  return (
    <div>
      <a href='/ChooseUnity'>
        <div className={'button'}>{title}</div>
      </a>
    </div>
  );
}

export default Button;
