import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAppointment } from '../../../redux/appointmentSlice';
import ApiService from '../../../services/api.service';
import './DateAndTime.scss';

function DateAndTime({ datetime }) {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(datetime);
    ApiService.getValidIntervals(appointment.branch).then((res) => {
      res.map((item) => {
        const itemDate = new Date(item.day);
        if (itemDate.getDate() == datetime.getDate() && itemDate.getMonth() == datetime.getMonth())
          setData(item.timeSlots);
      });
    });
  }, [datetime]);

  if (!data) return null; //loading screen de fapt
  return (
    <div className={'containerDateAndTime'}>
      <p className='miniTitle'>Alege ora</p>
      <div className='DateAndTimeBox'>
        {data.map((item) => (
            <div onClick={() => dispatch(setAppointment({datetime_start: item.dateTimeStart}))} className='OraBox'>
              <p className='Ora'>
                {new Date(item.dateTimeStart).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} -{' '}
                {new Date(item.dateTimeEnd).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default DateAndTime;
