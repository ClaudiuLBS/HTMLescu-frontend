import './Button.scss';

function Button({ title, href, disabled=false }) {
  
  if (disabled) 
    return (
      <div>
        <div className='button deactivate'>{title}</div>
      </div>
    )

  return (
    <div>
      <a href={href}>
        <div className={'button'}>{title}</div>
      </a>
    </div>
  );
}

export default Button;
