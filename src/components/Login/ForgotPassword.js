import React from 'react'
import mail from '../../fluent_mail-20-regular.png'

function ForgotPassword() {
  return (
    <div style={{ marginTop: '148px', color: 'white', letterSpacing: '-0.5px', lineHeight: '20px' }}>
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>FORGOT MY PASSWORD</h1>
            <p style={{ marginLeft: '25px', marginRight: '25px', marginTop: '40px', fontSize: '16px' }}>Enter your username or email address in the form and press the Send Email button to have a password resent link sent to your email acoount on file.</p>
        </div>
        <div style={{ marginLeft: '120px', marginRight: '120px', lineHeight: '1px' }}>
            <div style={{ display: 'flex', height: "auto", width: "auto", overflow: "hidden" }}>
                <img style={{ maxHeight: "25px", marginTop: '50px', width: "25px", overflow: "hidden" }} src={mail} alt="mail" />
                <p style={{ marginTop: '62px', fontSize: '16px', marginLeft: '10px' }}>Enter your User Id*</p>
            </div>
            <form>
                <input style={{ height: '40px', width: '100%', border: '1.5px solid #9F9F9F', borderRadius: '5px' }} type="text" />
            </form>
            <div style={{ lineHeight: '1px', textAlign: 'center' }}>
                <div style={{ alignItems: 'center', display: 'flex', margin: '50px 0 0 20px' }}>
                    <button style={{ width: '180px', fontSize: '15px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                        SEND EMAIL LINK
                    </button>
                    <button style={{ width: '180px', fontSize: '15px', height: '50px', marginLeft: '40px', color: '#626262', background: '#D6D6D6', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                        BACK
                    </button>
                </div>            
        </div>            
        </div>
    </div>
  )
}

export default ForgotPassword