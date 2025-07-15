import React from 'react';

type HeaderProps = {
  onNavigate: (view: 'home' | 'admin-login' | 'student-login') => void;
};


const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header
      style={{
        backgroundColor: '#007bff',
        padding: '5px 10px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '2em', fontWeight: 'bold' }}>
        EduLearn App
      </h1>
      <nav>
        <button
          onClick={() => onNavigate('home')}
          style={{
            background: 'white',
            color: '#007bff',
            border: '1px solid #007bff',
            padding: '8px 16px',
            marginLeft: '10px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s, color 0.3s',
          }}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('student-login')}
          style={{
            background: 'white',
            color: '#007bff',
            border: '1px solid #007bff',
            padding: '8px 16px',
            marginLeft: '10px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s, color 0.3s',
          }}
          >Student Login
        </button>
        <button
          onClick={() => onNavigate('admin-login')}
          style={{
            background: 'white',
            color: '#007bff',
            border: '1px solid #007bff',
            padding: '8px 16px',
            marginLeft: '10px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s, color 0.3s',
          }}
          >Admin Login
        </button>
        
      </nav>
    </header>
  );
};

export default Header;
