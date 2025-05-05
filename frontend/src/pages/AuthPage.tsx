import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/auth.sass';

import Button from '../components/ui/Button';

type AuthPageProps = {
    authType: 'login' | 'signup';
}

const AuthPage: React.FC<AuthPageProps> = ({ authType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log("Submitted");
    }

    return (
        <div className='auth-page'>
            <div className='auth-page__content'>
                <img src="/mnogomov-night.svg" alt="App Logo" />
                <h2>{authType == 'login' ? 'Welcome back!' : 'A brand new face!'}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder='Your email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input 
                        type="password"
                        placeholder='Your password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button variant='primary' size='lg' type='submit'>
                        {authType == 'login' ? 'Login' : 'Sign Up'}
                    </Button>
                </form>

                {authType == 'login' && (
                    <p>Don't have an account? <Link to='/mnogomov/register'>Make one!</Link></p>
                )}
                {authType == 'signup' && (
                    <p>Already have an account? <Link to='/mnogomov/login'>Sign in!</Link></p>
                )}
            </div>
        </div>
    );
}

export default AuthPage;