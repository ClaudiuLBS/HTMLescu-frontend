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
        .then((result) => resolve(result.data.city))
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
  }
};

export default ApiService;
