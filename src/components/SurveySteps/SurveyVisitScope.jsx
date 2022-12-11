import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SurveyLayout.scss';
import './SurveyVisitScope.scss';

import MainDescription from '../UI/MainDescription';
import MainTitle from '../UI/MainTitle';
import DropDown from '../UI/DropDown';
import Buton from '../UI/Button/Button';
import SurveryLayout from './SurveyLayout';

function SurveyVisitScope() {
  const appointment = useSelector((state) => state.appointment);
  const [errorClass, setErrorClass] = useState('error__message');

  return (
    <SurveryLayout currentPage={0}>
      <div className='survey_wrapper'>
        <MainTitle title='Despre ce doresti sa vorbim?'></MainTitle>
        <MainDescription desc='Alegeti unul dintre subiectele de mai jos, pentru care veti programa vizita in unitate.'></MainDescription>
        <div className='survey_unity__scope'>
          <DropDown />
          <Buton
            onClick={() => (!appointment.operation ? setErrorClass('error__message error__message_visible') : null)}
            disabled={!appointment.operation}
            href='/ChooseUnity'
            title='Continua'
          ></Buton>
        </div>

        {/* Trebuie adaugata clasa `error__message_visible` */}
        <span className={errorClass}>Acest camp este obligatoriu!</span>
      </div>
    </SurveryLayout>
  );
}

export default SurveyVisitScope;
