import './App.css';
import { Header } from '../src/components/Header'
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { Button } from './components/Button'


 
function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Button />
      <GlobalStyle />
    </div>
  );
}

export default App;
