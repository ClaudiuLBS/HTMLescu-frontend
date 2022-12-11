import './SurveyLayout.scss';

import HeaderNavigation from '../UI/HeaderNavigation';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const STEP_TITLES = [
  'PAS 1 - Alege scopul vizitei',
  'PAS 2 - Alege unitatea BCR',
  'PAS 3 - Alege data pentru programare',
  'PAS 4 - Introdu datele personale',
];

function SurveryLayout({ children, currentPage }) {
  //modifies survey navigation background
  useEffect(() => {
    handleStateCompletion(currentPage)
  },[])

  function handleStateCompletion(pos) {
    const root = document.documentElement;

    const completion = (pos * 100) / (STEP_TITLES.length - 1);
    const incompletion = 100 - completion;

    root?.style.setProperty('--navWidthComplete', completion + '%');
    root?.style.setProperty('--navWidthIncomplete', incompletion + '%');
  }

  return (
    <div className='body_wrapper'>
      <HeaderNavigation />

      <div className='page_wrapper'>
        <h1>{STEP_TITLES[currentPage]}</h1>

        <div className='survey_navigation'>
          {/* FIRST STEP */}
          <div className={currentPage >= 0 ? 'survey_step survey_step__active' : 'survey_step'}>
            <Link hidden={currentPage <= 0} to='/' onClick={() => handleStateCompletion(0)}/>
          </div>

          {/* SECOND STEP : CHOOSE BRANCH */}
          <div className={currentPage >= 1 ? 'survey_step survey_step__active' : 'survey_step'}>
            <Link hidden={currentPage <= 1} to='/ChooseUnity' onClick={() => handleStateCompletion(1)}/>
          </div>

          {/* THIRD STEP: CHOOSE DATE */}
          <div className={currentPage >= 2 ? 'survey_step survey_step__active' : 'survey_step'}>
            <Link hidden={currentPage <= 2} to='/ChooseDate' onClick={() => handleStateCompletion(2)}/>
          </div>

          {/* FOURTH STEP: USER DATA */}
          <div className={currentPage >= 3 ? 'survey_step survey_step__active' : 'survey_step'}>
            <Link hidden={currentPage <= 3} to='/UserData' s onClick={() => handleStateCompletion(3)}/>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default SurveryLayout;
