import React from 'react'

function NewPassword() {
  return (
    <div style={{ marginTop: '148px', color: 'white', letterSpacing: '-0.5px', lineHeight: '20px' }}>
        <div style={{ textAlign: 'center' }}>
            <h1>CREATE A NEW PASSWORD</h1>
        </div>
        <div style={{ marginLeft: '164px', marginRight: '164px' }}>
            <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400, marginTop: '56px' }}>Create a password</p>
            <form>
                <input style={{ height: '40px', width: '100%' }} type="text" />
            </form>
            <p style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400 }}>Confirm new password</p>
            <form>
                <input style={{ height: '40px', width: '100%' }} type="text" />
            </form>
            <div style={{ alignItems: 'center', display: 'flex', marginTop: '50px' }}>
                <button style={{ width: '200px', height: '50px', color: 'white', background: 'linear-gradient(88.03deg, #47B2E4 32.05%, #47B2E4 69.72%, #FFFFFF 124.44%)', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    SAVE PASSWORD
                </button>
                <button style={{ width: '200px', height: '50px', marginLeft: '40px', color: 'black', background: '#D6D6D6', boxShadow: '0px 4px 25px rgba(255, 255, 255, 0.15)', borderRadius: '30px', border: 'none' }} onclick="">
                    BACK
                </button>
            </div>           
        </div>
    </div>
  )
}

export default NewPassword