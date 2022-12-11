import axios from 'axios';
import config from '../config';

const ApiService = {
  getAllBranches() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/branches`)
        .then((result) => resolve(result.data))
        .catch((err) => reject(err));
    });
  },
  getBranchByCity(city) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/branches/?city=${city}`)
        .then((result) => resolve(result.data))
        .catch((err) => reject(err));
    });
  },
  getUserLocation() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/location`)
        .then((result) => resolve(result.data))
        .catch((err) => reject(err));
    });
  },
  getAllCities() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/cities`)
        .then((result) => resolve(result.data.cities))
        .catch((err) => reject(err));
    });
  },
  getValidIntervals(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/available/${id}`)
        .then((result) => resolve(result.data.availableTimeList))
        .catch((err) => reject(err));
    });
  },
  getCloseBranches(coords, radius = 30) {
    // coords = (lat, long)
    const [lat, long] = coords;
    // Radius-ul asta ar trebui sa varieze in functe de zoom-ul hartii
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/close-branches`, { params: { lat, long, radius } })
        .then((result) => resolve(result.data.branches))
        .catch((err) => reject(err));
    });
  },
  postAppointment(name, email, datetime_start, branch) {
    return new Promise((resolve, reject) => {
      axios
      .post(`${config.apiUrl}/appointments/`, { name, email, datetime_start, branch })
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
    })
  }
};

export default ApiService;
