import React from 'react'

function Verify() {
  return (
    <div style={{ marginTop: '148px', color: 'white', letterSpacing: '-0.5px', lineHeight: '20px' }}>
        <div style={{ textAlign: 'center' }}>
            <h1>VERIFY YOUR IDENTITY</h1>
            <p>Jhon@123.com</p>
            <div style={{ paddingLeft: '200px', paddingRight: '200px', textAlign: 'left' }}>
                <p>Apporve a request on my Sepstream Authenicator step.</p>
            </div>
        </div>
        <div style={{ marginLeft: '164px', marginRight: '164px' }}>
            <div>
                <p style={{ marginTop: '80px', paddingLeft: '50px', paddingRight: '40px', textAlign: 'left' }}>Use a verification code from my mobile number.</p>
            </div>
            <div>
                <p style={{ paddingLeft: '50px', paddingRight: '40px', textAlign: 'left' }}>Text +X XXXXXXXXXXX40</p>
            </div>
            <div>
                <p style={{ paddingLeft: '50px', paddingRight: '40px', textAlign: 'left' }}>Call +X XXXXXXXXXXX40</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
                <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    GO
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Verify