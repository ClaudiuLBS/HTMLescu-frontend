import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Button from '../UI/Button/Button';
import bcr_logo from '../../assets/images/BCR-logo.jpg';
import ApiService from '../../services/api.service';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyDEYKx-T2kysgf6v9KlawOOfwjGOVnIW64
const SurveyMap = () => {
  const [imageSize, setImageSize] = useState(50)
  const [data, setData] = useState([])
  useEffect(() => {
    ApiService.getCloseBranches([44.439663, 26.096306], 10).then(res => setData(res))
  }, [])

  const defaultProps = {
    center: {
      lat: 44.439663,
      lng: 26.096306,
    },
    zoom: 11,
  };

  const handleMapChange = (obj) => {
    const {center, zoom} = obj
    const coords = [center.lat, center.lng]
    setImageSize(Math.max(zoom*zoom/5, 30))
    const radius = (23 - zoom)*(23 - zoom) / (zoom / 4)
    ApiService.getCloseBranches(coords, radius).then(res => setData(res)).catch(e => console.log('n1'))
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDEYKx-T2kysgf6v9KlawOOfwjGOVnIW64' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onChange={handleMapChange}
      >
        {data.map(item => (
          <img lat={item.latitude} lng={item.longitude} style={{width: imageSize, borderRadius: 5}} src={bcr_logo}/>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SurveyMap;
