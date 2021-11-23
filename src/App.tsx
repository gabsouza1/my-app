import './App.css';
import { Header } from '../src/components/Header'
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';


 
function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
