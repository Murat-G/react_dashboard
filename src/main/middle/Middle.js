import React from 'react';
import Working from './component/Working';

const Middle = () => {
  return (
    <div style={{height:'55em'}}> 
      <div style={{ display:'flex',justifyContent:'center', alignItems:'center', marginTop:'5em'}}>
        <Working />
      </div>
    </div>
  )
}

export default Middle;
