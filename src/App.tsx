import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import StudentLogin from './pages/StudentLogin';



function App() {
  const [view, setView] = useState<'home' | 'admin-login' | 'student-login'>('home');


  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header onNavigate={setView} />

      <main style={{ padding: '20px', minHeight: '60vh' }}>
        {view === 'home' && (
          
          <>
            <h2>Welcome to the App</h2>
            <p>This is the main content area (courses will go here).</p>
          </>
        )}

{view === 'admin-login' && <AdminLogin />}
{view === 'student-login' && <StudentLogin />}

      </main>

      <Footer />
    </div>
  );
}

export default App;
