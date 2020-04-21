import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../apis/corona';
import { Line, Bar } from 'react-chartjs-2';
const Chart = ({ total: { confirmed, recovered, deaths }, country }) => {
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDaily(await fetchDailyData());
    };
    fetchAPI();
  }, [setDaily]);
  const LineChart = daily.length ? (
    <Line
      data={{
        labels: daily.map(({ date }) => date),
        datasets: [
          {
            data: daily.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#db2828',
          },
          {
            data: daily.map(({ deaths }) => deaths),
            label: 'Deaths',
            backgroundColor: '#1b1c1d',
          },
        ],
      }}
    />
  ) : null;
  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#db2828', '#21ba45', '#1b1c1d'],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, fontSize: 24, text: `Corona in ${country}` },
      }}
    />
  ) : null;
  const renderDisplay = country === 'global' ? LineChart : BarChart;
  return <div>{renderDisplay}</div>;
};

export default Chart;
