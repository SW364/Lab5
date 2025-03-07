import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // credenciales ficticias
    const validCredentials = {
        username: "admin",
        password: "1234"
    };

    const onLogin = (e) => {
        
        if (username === validCredentials.username && password === validCredentials.password) {
            navigate('/Home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form className="p-4 bg-light rounded shadow" onSubmit={onLogin}>
                <h3 className="text-center mb-3">Login</h3>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign in</button>
            </form>
        </div>
    );
};
