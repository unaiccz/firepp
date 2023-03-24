import React, { useState } from 'react';
import { llogin } from '../config/fb';
const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await llogin({ email, password });
       console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
<h2>log-in</h2>
      <form onSubmit={submit}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='btn btn-dark'>Log-in</button>
      </form>
    </div>
  )
}

export default Home
