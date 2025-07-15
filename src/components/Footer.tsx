import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2025 My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
