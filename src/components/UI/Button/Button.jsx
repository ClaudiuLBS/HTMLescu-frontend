import './Button.scss';

function Button({ title, href, disabled=false, onClick }) {
  
  if (disabled) 
    return (
      <div>
        <div onClick={onClick} className='button deactivate'>{title}</div>
      </div>
    )

  return (
    <div>
      <a href={href}>
        <div onClick={onClick} className={'button'}>{title}</div>
      </a>
    </div>
  );
}

export default Button;
