
import './App.css';
import { Header } from './Components/index';
import { Footer } from './Footer';
import { CartCard } from './Components/CartCard';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
