import React from 'react'

function SmsVerify() {
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
                <h3 style={{ marginTop: '50px', paddingLeft: '50px', paddingRight: '40px', textAlign: 'center', lineHeight: '2px' }}>SMS Authentication</h3>
            </div>
            <div>
                <p style={{ paddingLeft: '50px', paddingRight: '40px', textAlign: 'center' }}>(X XXXXXXXXXXX40)</p>
            </div>            
        </div>
        <div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                VERIFY
            </button>
        </div>
        <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400, color: '#78C7EC', textAlign: 'center' }}>Try another method</p>
    </div>
  )
}

export default SmsVerify