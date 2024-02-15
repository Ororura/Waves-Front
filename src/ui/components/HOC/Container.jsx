import * as React from 'react';

export const Container = ({ children }) => {
  return (
    <div
      style={{
        paddingTop: '30px',
        width: '50%',
        color: 'white',
        fontSize: '25px',
        borderRadius: '15px',
        margin: 'auto',
        marginTop: '50px',
        padding: '10px',
        textAlign: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(141, 49, 181)',
      }}
    >
      {children}
    </div>
  );
};
