import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppointment } from '../../../redux/appointmentSlice';
import ApiService from '../../../services/api.service';
import Button from '../Button/Button';
import './UserDateForm.scss';

function UserDateForm({ navigate }) {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [nameClass, setNameClass] = useState('error__message')
  const [lastNameClass, setLastNameClass] = useState('error__message')
  const [emailClass, setEmailClass] = useState('error__message')
  const [emailBadClass, setEmailBadClass] = useState('error__message')

  const onSubmitData = () => {
    setNameClass('error__message')
    setLastNameClass('error__message')
    setEmailClass('error__message')
    setLoading(true);
    const name = nume + ' ' + prenume;
    dispatch(setAppointment({ name, email }));
    const { branch, datetime_start } = appointment;
    console.log(name, email, datetime_start, branch);
    ApiService.postAppointment(name, email, datetime_start, branch)
      .then((res) => {
        navigate('/Final');
      })
      .catch((err) => {
        setLoading(false)
        if (nume.length == 0)
          setNameClass('error__message error__message_visible')
        if (prenume.length == 0)
          setLastNameClass('error__message error__message_visible')
        if (email.length == 0)
          setEmailClass('error__message error__message_visible')
        if (!email.includes('@'))
          setEmailBadClass('error__message error__message_visible')
      });
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
            <span className={nameClass}>Acest camp este obligatoriu!</span>
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
            <span className={lastNameClass}>Acest camp este obligatoriu!</span>
          </div>
        </div>
        <div className='formInputLabel' id='lastFormInputLabel'>
          <label htmlFor='email'>Adresa de e-mail*</label>
          <input onChange={(event) => setEmail(event.target.value)} type='email' className='email' name='email'></input>
          {/* Trebuie adaugata clasa `error__message_visible` */}
          <span className={emailClass}>Acest camp este obligatoriu!</span>
          <span className={emailBadClass}>Emailul nu respecta formatul corespunzator!</span>
        </div>
      </div>
      <Button disabled={loading} onClick={onSubmitData} title='Finalizeaza programarea' />
    </div>
  );
}

export default UserDateForm;
