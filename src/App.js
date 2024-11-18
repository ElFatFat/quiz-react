import './App.css';
import { Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Accueil du site */}
        <Route path="/" element={<Test />} />


        {/* Cette route correspond au 'Erreur 404: Page non trouvée */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
