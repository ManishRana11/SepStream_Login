import React from 'react'

function Prohibit() {
  return (
    <div style={{ marginTop: '148px', color: 'white', letterSpacing: '-0.5px', lineHeight: '20px' }}>
        <div style={{ textAlign: 'center' }}>
            <h1>LOGIN</h1>
            <p>Please enter your login details</p>
        </div>
        <div style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'center', marginTop: '63px' }}>
            <p style={{ lineHeight: '30px' }}>This account is currently logged in at another terminal/workstation. Do you wish to continue logging in by breaking the other connection?</p>
            <div style={{ alignItems: 'center', marginLeft: '104px', display: 'flex', marginTop: '50px' }}>
                <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    CONTINUE
                </button>
                <button style={{ width: '200px', height: '50px', marginLeft: '40px', color: 'black', background: '#D6D6D6', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    BACK
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Prohibit