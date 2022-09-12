import React from 'react'
import bcg from '../../BG.svg'
import logo from '../../log.png'
import Login from '../Login'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'
import Prohibit from './Prohibit'

function Main() {
    return (
        <div style={{ backgroundImage: `url(${bcg})`, height: '100%', paddingBottom: '100px' }}>
            <div style={{ display: 'flex', height: "auto", width: "auto", overflow: "hidden", marginLeft: '44px', paddingTop: '30px' }}>
                <img style={{ maxHeight: "72px", width: "72px", overflow: "hidden" }} src={logo} alt="logo" />
                <h1 style={{ marginLeft: '22px', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '800', fontSize: '30px', color: '#FFFFFF' }}>SepStream</h1>
                <p style={{ marginLeft: '18px', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '600', fontSize: '25px', color: '#FFFFFF' }}>Secure Client Login</p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%', float: 'left', textAlign: 'center', padding: '119px', color: 'white' }}>
                    <h1 style={{ fontSize: '30px' }}>UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED</h1>
                    <p>The User will be given access to information which in some cases might inlude individual identifiable health information which is considered private,privileged and confidential. Such information is deemed to be Covered information for purposes of the Health Insurance Portability and Accountability Act of 1996 (HIPAA), P.L. 104-191. The user is required to maintain the private, privileged and confidential status of the Covered Information. The user is prohibited from further using or disclosing the Covered Information for any purpose other than the purpose for any purpose other than the purpose for which access is granted. In addition, by logging in, installing or otherwise using this software, you agree to be bound by the terms of the EULA. If you do not agree to the terms of the EULA, do not log in, install or otherwise use this software. Please acknowledge these terms by logging in. If the user logs in, it is intended to be the legal equivalent of the user's signature on a written document and equally binding. The user will be given access only by logging in.</p>
                    <h3>© Seppi Technology Associates, LLC 2016 ver.4.0</h3>
                </div>
                <div style={{ width: '50%', float: 'right', height: '800px', background: 'background: linear-gradient(167.57deg, rgba(36, 40, 77, 0.26) -4.68%, rgba(28, 27, 51, 0.26) 95.45%)', boxShadow: 'inset 0px 1px 0px #FFFFFF', backdropFilter: 'blur(50px)', borderRadius: '44px', marginRight: '50px' }}>
                    <NewPassword/>
                </div>
            </div>
        </div>
    )
}

export default Main