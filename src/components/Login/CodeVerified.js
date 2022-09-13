import React from 'react'

function CodeVerified() {
  return (
    <div style={{ marginTop: '148px', textAlign: 'center', color: 'white' }}>
        <h1>Code Verified</h1>
        <p style={{ paddingLeft: '200px', paddingRight: '200px' }}>Your authentication code accepted</p>
        <p style={{ padding: '0 50px' }}>This account is currently logged in at another terminal/workstation. Do you wish to continue logging in by breaking the other connection?</p>
        <div style={{ display: 'flex', marginTop: '50px', marginLeft: '120px' }}>
            <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                CONTINUE
            </button>
            <button style={{ width: '200px', height: '50px', marginLeft: '40px', color: 'black', background: '#D6D6D6', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                BACK
            </button>
        </div> 
    </div>
  )
}

export default CodeVerified