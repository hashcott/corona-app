import React, { Fragment } from 'react';
import { fetchData, fetchDataCountry } from '../apis/corona';
import CoronaWorld from './CoronaWorld';
import Chart from './Chart';
import CountryList from './CountryList';
class App extends React.Component {
  state = { total: {}, daily: [], country: 'global' };

  handleCountry = async (country) => {
    if (country !== 'global') {
      this.setState({ total: await fetchDataCountry(country), country });
    } else {
      this.setState({ total: await fetchData(), country: 'global' });
    }
  };
  async componentDidMount() {
    this.setState({ total: await fetchData() });
  }
  render() {
    const { total, country } = this.state;
    return (
      <Fragment>
        <div style={{ marginTop: '15px' }} className='ui container'>
          <div className='ui center aligned header'>
            <img style={{ width: '20%' }} src='/logo.png' alt='Corona App' />
          </div>
          <CoronaWorld total={total} />
          <p className='ui center aligned header'>
            Last Update: {new Date(total.lastUpdate).toDateString()}
          </p>
          <CountryList handleCountry={this.handleCountry} />
          <Chart total={total} country={country} />
        </div>
        <div className='ui black segment center aligned header'>
          <p>
            <a className='ui button' href='https://covid19.mathdro.id/api'>
              <i className='linkify icon'></i> APIs by Mathdro
            </a>
            <a className='ui button' href='https://semantic-ui.com/'>
              Semantic UI
            </a>
            <a className='ui button blue' href='https://covid19.mathdro.id/api'>
              <i className='react icon'></i> ReactJS
            </a>
          </p>
          <p>
            <a href='https://github.com/2ksoft' className='ui button black'>
              <i className='github icon'></i> Github
            </a>
            <a
              href='https://facebook.com/hanhgoogle'
              className='ui facebook button black'
            >
              <i className='facebook icon'></i> Facebook
            </a>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
