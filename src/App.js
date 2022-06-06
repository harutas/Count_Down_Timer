import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
