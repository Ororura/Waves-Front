import * as React from 'react'

export const Container = ({ children }) => {
  return (
    <div
      style={{
        width: '50%',
        color: 'black',
        fontSize: '25px',
        borderRadius: '15px',
        marginTop: '20px',
        margin: 'auto',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  )
}
