import { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminLogin: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('phone', phone)
      .single();

    if (error || !data) {
      setMessage('❌ Admin not found.');
    } else if (data.password === password) {
      setMessage(`✅ Welcome admin!`);
      // later: you can redirect to edit std/lesson
    } else {
      setMessage('❌ Incorrect password.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', textAlign: 'left' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
          }}
        >
          Log In
        </button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default AdminLogin;
