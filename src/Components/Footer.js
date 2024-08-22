import React from 'react'

const Footer = () => {
 
  let footerStyle = {
    position:"relative",
    height: "5vh",
    width : "100vw",
  
  };
  return (

    <div className='bg-dark text-light' style={footerStyle} >
      <p className="text-center">Copyright &copy; Sourabh Kumar</p>
    </div>
  )
}

export default Footer
