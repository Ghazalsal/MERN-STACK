import React, {useState} from "react";
const Hook = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [ email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [conf, setConf] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confError, setConfError] = useState("");
    const createFirst = (e) => {
        if(e.target.value.length < 2) {setFirstError("First Name must be 3 characters or longer!");}
        else{ setFirstError("")}

    }
    const createLast = (e) => {
        if(e.target.value.length < 2){ setLastError("Last Name must be longer than 2 characters");}
        else{ setLastError("")}
    }
    const creatEmail = (e) => {
        if(e.target.value.length < 2){ setEmailError("Email must be at least 2 characters");}
        else{ setEmailError("")}
    }
    const creatPass = (e) => {
        if(e.target.value.length < 8){ setPassError("Password must be at least 8 characters");}
        else{ setPassError("")}
    }
    const creatConf = (e) => {
        if(e.target.value.length < 8){setConfError("Passwords must match!");}
        else{ setConfError("")}
    }
    
    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ createFirst } />
                {
                    firstError ?
                    <p style={{color:'red'}}>{ firstError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ createLast } />
                {
                    lastError ?
                    <p style={{color:'red'}}>{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ creatEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ creatPass } />
                {
                    passError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ creatConf } />
                {
                    confError ?
                    <p style={{color:'red'}}>{ confError }</p> :
                    ''
                }
            </div>
        </form>
    );
}
export default Hook;