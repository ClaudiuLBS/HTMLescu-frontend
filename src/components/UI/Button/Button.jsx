import { Link } from 'react-router-dom';
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
      <Link to={href}>
        <div onClick={onClick} className={'button'}>{title}</div>
      </Link>
    </div>
  );
}

export default Button;
