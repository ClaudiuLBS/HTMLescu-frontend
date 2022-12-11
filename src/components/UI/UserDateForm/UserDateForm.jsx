import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppointment } from '../../../redux/appointmentSlice';
import ApiService from '../../../services/api.service';
import Button from '../Button/Button';
import './UserDateForm.scss';

function UserDateForm({navigate}) {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitData = () => {
    console.log(navigate)
    const name = nume + ' ' + prenume;
    dispatch(setAppointment({ name, email }));
    const { branch, datetime_start } = appointment;
    console.log(name, email, datetime_start, branch)
    ApiService.postAppointment(name, email, datetime_start, branch)
      .then((res) => navigate('/Final'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='formInputBox'>
        <div className='formInputBlock'>
          <div className='formInputLabel'>
            <label htmlFor='firstname'>Nume*</label>
            <input
              onChange={(event) => setNume(event.target.value)}
              type='text'
              className='firstname'
              name='firstname'
            ></input>
            {/* Trebuie adaugata clasa `error__message_visible` */}
            <span className='error__message'>Acest camp este obligatoriu!</span>
          </div>
          <div className='formInputLabel'>
            <label htmlFor='lastname'>Prenume*</label>
            <input
              onChange={(event) => setPrenume(event.target.value)}
              type='text'
              className='lastname'
              name='lastname'
            ></input>
            {/* Trebuie adaugata clasa `error__message_visible` */}
            <span className='error__message'>Acest camp este obligatoriu!</span>
          </div>
        </div>
        <div className='formInputLabel' id='lastFormInputLabel'>
          <label htmlFor='email'>Adresa de e-mail*</label>
          <input onChange={(event) => setEmail(event.target.value)} type='email' className='email' name='email'></input>
          {/* Trebuie adaugata clasa `error__message_visible` */}
          <span className='error__message'>Acest camp este obligatoriu!</span>
        </div>
      </div>
      <Button onClick={onSubmitData} title='Finalizeaza programarea' />
    </div>
  );
}

export default UserDateForm;
