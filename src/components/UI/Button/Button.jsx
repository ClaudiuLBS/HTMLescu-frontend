import './Button.scss';

function Button({ title, href }) {
  return (
    <div>
      <a href={href}>
        <div className={'button'}>{title}</div>
      </a>
    </div>
  );
}

export default Button;
