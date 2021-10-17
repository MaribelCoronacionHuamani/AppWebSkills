import './App.css';
import { Footer } from './components/ui/Footer';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
