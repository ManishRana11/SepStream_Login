import React from 'react'

function Login() {
  return (
    <div style={{ marginTop: '148px', color: 'white', letterSpacing: '-0.5px', lineHeight: '20px' }}>
        <div style={{ textAlign: 'center' }}>
            <h1>LOGIN</h1>
            <p>Please enter your login details</p>
        </div>
        <div style={{ marginLeft: '164px', marginRight: '164px' }}>
            <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400, marginTop: '106px' }}>Enter your User Id*</p>
            <form>
                <input style={{ height: '40px', width: '100%' }} type="text" />
            </form>
            <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400 }}>Enter your password*</p>
            <form>
                <input style={{ height: '40px', width: '100%' }} type="password" />
            </form>
            <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400, color: '#78C7EC', textAlign: 'right' }}>Forgot Password?</p>
            <div style={{ textAlign: 'center' }}>
                <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    Login
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Login