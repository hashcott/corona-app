import '../style/CoronaWorld.css';
import React from 'react';
import CoronaCard from './CoronaCard';
const CoronaWorld = (props) => {
  const { confirmed, recovered, deaths } = props.total;
  return (
    <div className='ui segment'>
      <div className='ui three column center aligned doubling stackable grid container'>
        <div className='column'>
          <CoronaCard
            title='Infected'
            count={confirmed}
            color='red'
            icon='ambulance'
          />
        </div>
        <div className='column'>
          <CoronaCard
            title='Recovered'
            count={recovered}
            color='green'
            icon='heartbeat'
          />
        </div>
        <div className='column'>
          <CoronaCard
            title='Deaths'
            count={deaths}
            color='black'
            icon='frown outline'
          />
        </div>
      </div>
    </div>
  );
};

export default CoronaWorld;
