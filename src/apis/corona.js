import axios from 'axios';
const URL = 'https://covid19.mathdro.id/api';
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);
    const modifierData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    };
    return modifierData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const modifierData = data.map((dataDaily) => ({
      confirmed: dataDaily.confirmed.total,
      deaths: dataDaily.deaths.total,
      date: dataDaily.reportDate,
    }));
    return modifierData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    const modifierData = countries.map(({ name }) => name);
    return modifierData;
  } catch (error) {}
};

export const fetchDataCountry = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${URL}/countries/${country}`);
    const modifierData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    };
    console.log(modifierData);
    return modifierData;
  } catch (error) {}
};
