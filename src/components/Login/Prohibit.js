import React from 'react'

function Prohibit() {
  return (
    <div style={{ marginTop: '200px', color: 'white' }}>
        <div style={{ textAlign: 'center', lineHeight: '1px' }}>
            <p style={{ fontWeight: 500, fontSize: '35px' }}>LOGIN</p>
            <p>Please enter your login details</p>
        </div>
        <div style={{ margin: '50px 30px 0 30px', lineHeight: '1px', textAlign: 'center' }}>
            <p style={{ lineHeight: '30px', fontSize: '17px' }}>This account is currently logged in at another terminal/workstation. Do you wish to continue logging in by breaking the other connection?</p>
            <div style={{ alignItems: 'center', display: 'flex', margin: '50px 0 0 100px' }}>
                <button style={{ width: '180px', fontSize: '15px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    CONTINUE
                </button>
                <button style={{ width: '180px', fontSize: '15px', height: '50px', marginLeft: '40px', color: '#626262', background: '#D6D6D6', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    BACK
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Prohibit