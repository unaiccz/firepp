import React, {useState} from 'react'
import { register } from '../config/fb'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await register({ email, password });
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={submit}>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='btn btn-dark'>Register</button>
        </form>
    </div>
    )

  }
export default Register
