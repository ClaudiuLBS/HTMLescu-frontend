import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Button from '../UI/Button/Button';
import bcr_logo from '../../assets/images/BCR-logo.jpg';
import ApiService from '../../services/api.service';
import { InfinitySpin } from 'react-loader-spinner';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyDEYKx-T2kysgf6v9KlawOOfwjGOVnIW64
const SurveyMap = ({setBranch}) => {
  const [imageSize, setImageSize] = useState(50)
  const [data, setData] = useState([])
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    ApiService.getCloseBranches([44.439663, 26.096306], 10).then(res => setData(res))
    ApiService.getUserLocation().then(res => setCurrentLocation(res))

  }, [])

  const handleMapChange = (obj) => {
    const {center, zoom} = obj
    const coords = [center.lat, center.lng]
    setImageSize(Math.max(zoom*zoom/5, 30))
    const radius = (23 - zoom)*(23 - zoom) / (zoom / 4)
    ApiService.getCloseBranches(coords, radius).then(res => setData(res)).catch(e => console.log('n1'))
  }

  if (!currentLocation) return (
      <div className="spinner-wrapper" style={{flex: 1, width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
        <InfinitySpin 
          width='200'
          color="#1A67D2"
          />
      </div>
  ) //vlad fa te rog aici un loading screen

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDEYKx-T2kysgf6v9KlawOOfwjGOVnIW64' }}
        defaultCenter={{
            lat: currentLocation.latitude,
            lng: currentLocation.longitude,
        }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onChange={handleMapChange}
      >
        {data.map(item => (
          <img key={item.id} onClick={() => setBranch(item)} lat={item.latitude} lng={item.longitude} style={{width: imageSize, borderRadius: 5}} src={bcr_logo}/>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SurveyMap;
