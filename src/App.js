import './App.css';
import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
