import './App.css';
import Header from './components/Header';
import TimerInput from './components/TimerInput';
import TimerButton from './components/TimerButton';
import TimerView from './components/TimerView';
import { Stack, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <Stack direction={"row"} justifyContent="center">
          <TimerInput date={"時"} />
          <TimerInput date={"分"}/>
          <TimerInput date={"秒"}/>
          <TimerButton name={"開始"} />
        </Stack>
        <TimerView />
        <Stack direction={"row"} justifyContent="center">
          <TimerButton name={"一時停止"} />
          <TimerButton name={"再スタート"}/>
          <TimerButton name={"リセット"}/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
