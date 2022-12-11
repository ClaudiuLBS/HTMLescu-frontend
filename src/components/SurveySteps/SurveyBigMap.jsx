import SurveyMap from './SurveyMap';
import './SurveyBigMap.scss';
import Location from '../UI/Location/Location';
import Arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SurveyBigMap() {
  const [branch, setBranch] = useState(null);

  return (
    <div>
      <Link to='/ChooseUnity' className='container__top-left'>
        <img src={Arrow} alt='arrow' />
        <div>Inapoi</div>
      </Link>
      <SurveyMap setBranch={(item) => setBranch(item)} />
      {!branch ? null : (
        <div className='container__bottom-left'>
          <Location branch={branch} />
        </div>
      )}
    </div>
  );
}

export default SurveyBigMap;
