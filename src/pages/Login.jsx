import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!auth) {
      setError("Firebase chưa được cấu hình. Vui lòng thiết lập firebaseConfig trong src/firebase.js để sử dụng đăng nhập.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError("Đăng nhập thất bại: " + err.message);
    }
  };

  return (
    <div style={{ padding: '5rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '2rem' }}>Đăng nhập Quản trị viên</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.8rem', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Mật khẩu" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '0.8rem', border: '1px solid #ccc' }}
        />
        {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}
        <button type="submit" style={{ padding: '0.8rem', backgroundColor: '#111', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Tiếp tục
        </button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Quay lại trang chủ</Link>
      </div>
    </div>
  );
}

export default Login;
