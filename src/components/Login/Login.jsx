import React from 'react';

const Login = () => {
    return <div>
        <h4>LOGIN</h4>
        <div>
            <input placeholder={'login'} />
        </div>
        <div>
            <input placeholder={'password'} />
        </div>
        <div>
            <input type={'checkbox'} /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>;
}

export default Login;
