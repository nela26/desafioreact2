import React from 'react'

const Footer = ({footerText, footerDate}) => {
  return (
    <div className='footer'>
        <p>{footerText}</p>
        <p>{footerDate}</p>
    </div>
  )
}

export default Footer