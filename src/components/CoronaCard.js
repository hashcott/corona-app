import React from 'react';

const CoronaCard = ({ count, title, color, icon }) => {
  return (
    <div className='ui labeled button' tabIndex='0'>
      <div className={`ui ${color} button`}>
        <i className={`${icon} icon`}></i> {title}
      </div>
      <div className={`ui basic ${color} left pointing label`}>{count}</div>
    </div>
  );
};

export default CoronaCard;
