import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>Welcome to the App</h2>
        <p>This is the main content area (courses will go here).</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
