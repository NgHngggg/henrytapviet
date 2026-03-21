import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Basic route protection bypass for demo purposes if firebase isn't fully configured
    const checkAuth = () => {
      if (auth && !auth.currentUser) {
        navigate('/admin/login');
      }
    };
    setTimeout(checkAuth, 1000); 
  }, [navigate]);

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!db) {
      setMessage("Lỗi: Firebase chưa được cấu hình. (Chỉnh sửa thông số trong src/firebase.js)");
      return;
    }
    try {
      await addDoc(collection(db, "articles"), {
        title,
        category,
        content,
        // Using a default image for demo purposes
        image: "/images/img1.jpg", 
        date: new Date().toLocaleDateString('vi-VN'),
        createdAt: new Date().toISOString()
      });
      setMessage("✨ Đăng bài viết thành công!");
      setTitle(''); setCategory(''); setContent('');
    } catch (error) {
      setMessage("Lỗi: " + error.message);
    }
  };

  return (
    <div style={{ padding: '4rem 2rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif' }}>Khu vực Biên tập viên</h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#888' }}>Xem trang public →</Link>
      </header>

      <section style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '4px', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: '#333' }}>Đăng áng văn mới</h2>
        
        {message && <div style={{ padding: '1rem', background: '#fdfbf7', border: '1px solid #e8e2d2', marginBottom: '1.5rem', color: '#5a544c' }}>{message}</div>}
        
        <form onSubmit={handlePublish} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input 
            type="text" placeholder="Tiêu đề bài viết..." 
            value={title} onChange={(e) => setTitle(e.target.value)} required
            style={{ padding: '1rem', border: '1px solid #ddd', fontSize: '1.1rem', fontFamily: 'Times New Roman, serif' }}
          />
          <input 
            type="text" placeholder="Thể loại (VD: Tản văn, Truyện ngắn...)" 
            value={category} onChange={(e) => setCategory(e.target.value)} required
            style={{ padding: '1rem', border: '1px solid #ddd' }}
          />
          <textarea 
            placeholder="Nội dung bài viết..." 
            value={content} onChange={(e) => setContent(e.target.value)} required
            style={{ padding: '1.5rem', border: '1px solid #ddd', minHeight: '350px', fontSize: '1.15rem', fontFamily: 'Times New Roman, serif', lineHeight: '1.8' }}
          ></textarea>
          <button type="submit" style={{ padding: '1.2rem', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem', marginTop: '1rem' }}>
            Xuất bản ra Public
          </button>
        </form>
      </section>
    </div>
  );
}

export default Admin;
