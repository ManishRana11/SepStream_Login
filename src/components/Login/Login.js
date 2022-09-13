import React from 'react'
import walletIcon from '../../arcticons_id-wallet.png'
import lockIcon from '../../arcticons_password.png'
import eye from '../../eye.png'

function Login() {
  return (
    <div style={{ marginTop: '100px', color: 'white' }}>
        <div style={{ textAlign: 'center', lineHeight: '1px' }}>
            <p style={{ fontWeight: 500, fontSize: '35px' }}>LOGIN</p>
            <p>Please enter your login details</p>
        </div>
        <div style={{ marginLeft: '120px', marginRight: '120px', lineHeight: '1px' }}>
            <div style={{ display: 'flex', height: "auto", width: "auto", overflow: "hidden" }}>
                <img style={{ maxHeight: "30px", marginTop: '90px', width: "30px", overflow: "hidden" }} src={walletIcon} alt="wallet" />
                <p style={{ marginTop: '103px', fontSize: '16px', marginLeft: '10px' }}>Enter your User Id*</p>
            </div>
            <form>
                <input style={{ height: '40px', width: '100%', border: '1.5px solid #9F9F9F', borderRadius: '5px' }} type="text" />
            </form>
            <div style={{ display: 'flex', height: "auto", width: "auto", overflow: "hidden" }}>
                <img style={{ maxHeight: "22px", marginTop: '30px', width: "22px", overflow: "hidden" }} src={lockIcon} alt="lock" />
                <p style={{ marginTop: '43px', fontSize: '16px', marginLeft: '17px' }}>Enter your password*</p>
            </div>
            <form>
                <input style={{ height: '40px', width: '100%', border: '1.5px solid #9F9F9F', borderRadius: '5px' }} type="text" />
            </form>
            <p style={{ fontSize: '17px', fontWeight: 400, color: '#78C7EC', textAlign: 'right', marginTop: '30px' }}>Forgot Password?</p>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <button style={{ width: '180px', fontSize: '15px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    LOGIN
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Login